import React, {Component} from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'



/*class App extends Component{
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
    .catch(err => err);
  }

  componentDidMount(){
    this.callAPI();
  }

  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <p className = "App-intro">{this.state.apiResponse}</p>
        </header>
      </div>
    )
  }
}*/


function App() {  

  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/placeholder_white.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            hspace = "10"
          />
          {' Outpost'}
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

    /*<div className="row"> 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <div className="center">
          <Form id = "textMessagingArea" method = "post" action = "/addmessage">
              <MessagesBox/>
              
                <TextSend/>
              
          </Form>
      </div>
  </div>*/
  );
}

export default App;
