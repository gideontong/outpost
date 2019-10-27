import React, { Fragment } from "react";
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import InputGroupAppend  from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

function App() {  
  return (
    <div class="row">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <div className="center">
          <Form id = "textMessagingArea">
              <ListGroup >
                <ListGroup.Item>Brian: Spaghetti</ListGroup.Item>
                <ListGroup.Item>Max: Putin Putout</ListGroup.Item>
                <ListGroup.Item>Shan: I missed my math midterm</ListGroup.Item>
                <ListGroup.Item>Vincent: welcome to the farmer's market</ListGroup.Item>
                <ListGroup.Item>Gideon: lol c++ embedded libraries</ListGroup.Item>
                
              </ListGroup>
              
                <div class="form-inline" id = "textBar">
                    <textarea class="form-control"  id="sendTextArea" placeholder="Aa" rows = '1' />
                    <Button variant = "link" id = "button"><img src={"/send-arrow.png"} id = "sendArrowImage"></img> </Button> 
                </div>
              
          </Form>
      </div>
  </div>
  );
}

export default App;
