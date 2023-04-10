import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser()
  const setCurrentUser=useSetCurrentUser()

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };
console.log(currentUser?.username)
  const loggedIn = (
    <>
      {" "}
      <p> You are logged in {currentUser?.username} </p>
    </>
  );
  const NotLogg = (
    <>
      {" "}
      <p> You are not logged in </p>
    </>
  );
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
            </NavLink>

            

            
            <NavLink to="showall">
              <i className="fas fa-solid fa-plus"> </i> Show all
            </NavLink>
            {currentUser ? loggedIn : NotLogg}

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
            <NavLink to="/" onClick={handleLogOut}>
              <i className="fas fa-solid fa-plus"> </i> Logout
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
