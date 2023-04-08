import React, { useContext, useState } from "react";
import axios from "axios";
import styles from "../styles/LogInPage.module.css";
import { Alert, Button, Container, Form, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SetCurrentUserContext } from "../App";

const LogIn = () => {
  /** When user signs in  */
const setCurrentUser = useContext(SetCurrentUserContext);
  const [SignIn, SetSignIn] = useState({
    username: "",
    password: "",
  });
  const { username, password } = SignIn;

  const [error, setError] = useState({});
  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "https://utraknaren-drf.herokuapp.com/dj-rest-auth/login/",
        SignIn
      );
      setCurrentUser(data.user)
      console.log(data)
      navigate("/");
    } catch (err) {
      setError(err.response?.data);
    }
  };

  const handleInput = (event) => {
    SetSignIn({
      ...SignIn,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Container className={styles.CenterForm}>
        <Row md={12}>
          <Col md={12}>
            <Form onSubmit={submitForm}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  name="username"
                  onChange={handleInput}
                  className={styles.InputLogIn}
                />
              </Form.Group>
              {error.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleInput}
                  className={styles.InputLogIn}
                />
              </Form.Group>

              {error.password?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <Button
                variant="primary"
                type="submit"
                className={styles.LoginBtn}
              >
                Log in
              </Button>
              {error.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogIn;
