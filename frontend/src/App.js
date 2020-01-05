import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="Placeholder"
            src="/placeholder_white.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            hspace="10"
          />
          {'Outpost'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Communications" id="basic-nav-dropdown">
              <NavDropdown.Item href="#comm/texting">Texting</NavDropdown.Item>
              <NavDropdown.Item href="#comm/vidStream">Video Streaming</NavDropdown.Item>
              <NavDropdown.Item href="#comm/forum">Forum</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#comm/devNotes">Developer Notes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#text">Settings</Nav.Link>
            <Nav.Link href="#text">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default App;
