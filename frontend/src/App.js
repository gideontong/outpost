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
            <Nav.Link href="#about">Home</Nav.Link>
            <Nav.Link href="#text">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
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
