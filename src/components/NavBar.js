import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import styles from "../styles/NavBar.module.css";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(currentUser?.username);
  const loggedIn = (
    <>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <NavLink to="/showall" className={`nav-link ${styles["nav-link"]}`}>
        Mina uträkningar
      </NavLink>

      <NavLink
        to="/"
        onClick={handleLogOut}
        className={`nav-link ${styles["nav-link"]}`}
      >
        Logga ut
      </NavLink>

      <span className={styles.username}>
        Användare: {currentUser?.username}{" "}
      </span>
    </>
  );
  const NotLogg = (
    <>
      <NavLink to="/createaccount" className={`nav-link ${styles["nav-link"]}`}>
        Skapa konto
      </NavLink>

      <NavLink to="/login" className={`nav-link ${styles["nav-link"]}`}>
        Logga in
      </NavLink>
    </>
  );
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className={`navbar navbar-expand-lg ms-auto justify-content-end ${styles.navbar}`}
          >
            <NavLink exact to="/" className={`nav-link ${styles["nav-link"]}`}>
              Hem
            </NavLink>

            {currentUser ? loggedIn : NotLogg}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
