import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();


  const handleLogOut = async () => {
    try {
      await axios.post(
        "https://utraknaren-drf.herokuapp.com/dj-rest-auth/logout"
      );
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/"> Home</NavLink>
            <NavLink to="createaccount">
              <i className="fas fa-solid fa-plus"> </i> Create a account
              {currentUser?.username}
            </NavLink>

            <NavLink to="/" onClick={handleLogOut}>
              Log out
            </NavLink>

            <NavLink to="showall">
              <i className="fas fa-solid fa-plus"> </i> Show all
            </NavLink>

            <NavLink to="login">
              <i className="fas fa-solid fa-plus"> </i> Login
            </NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
