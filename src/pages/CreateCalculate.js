import React, { useState } from "react";
import { axiosReq } from "../api/axiosDefault";
import { Alert, Button, Form } from "react-bootstrap";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const CreateCalculate = (props) => {
  const [value, TheValue] = useState("");
  const currentUser = useCurrentUser();
  const [message, setMessage] = useState("");
  const [calculateNumber, setCalculateNumber] = useState({
    title: "",
    content: "",
    calculate: 1,
    result: 1,
  });

  const { title, content, calculate, result} =
    calculateNumber;
  const [error, setError] = useState({});

  const handleCalculate = (event) => {
    setCalculateNumber({
      ...calculateNumber,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("owner", currentUser.profile_id);
    formData.append("calculate", calculate);
    formData.append("result", result);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      setMessage("Created!");

      console.log(data);
    } catch (err) {
      if (err.response?.data !== 401) {
        setError(err.response?.data);
        console.log(err.response);
      }
    }
  };

  const countIt = () => {
    TheValue(parseInt(content) * 0.25);
  };

  const countFifty = () => {
    TheValue(parseInt(content * 0.5));
  };

 
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Titel"
            value={title}
            onChange={handleCalculate}
          />
        </Form.Group>
        {error?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <p>Result: {value} </p>
        <Form.Control
          type="number"
          placeholder="Ursprunglig siffra"
          name="content"
          min="0"
          max="1000000"
          value={content}
          onChange={handleCalculate}
        ></Form.Control>

        {error?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

<Form.Control
          type="number"
          placeholder="Resultat"
          name="result"
          min="0"
          max="1000000"
          value={value}
          onChange={handleCalculate}
        ></Form.Control>

        {error?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        <Form.Group>
          <Form.Label>Category number</Form.Label>
          <Form.Control as="select" name="calculate" onChange={handleCalculate}>
            <option value={calculate}> 25 </option>
            <option value={2}> 50 </option>
          </Form.Control>

          {error?.calculate?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Form.Group>
        <Button onClick={countIt}> 25% </Button>
        <p> </p>
        <Button onClick={countFifty}> 50% </Button>
        <p> </p>
        <Button variant="primary" type="submit">
          Create
        </Button>

        
        {message}
      </Form>
    </div>
  );
};
export default CreateCalculate;
