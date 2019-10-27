import React, { Fragment , Component} from "react";
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import InputGroupAppend  from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'


class textSend extends React.Component{

  render() {
      return (
        <div class="form-inline" id = "textBar">
            <textarea class="form-control"  id="sendTextArea" placeholder="Aa" rows = '1' />
            <Button variant = "link" onClick={sayHello} id = "button"><img src={"/send-arrow.png"} id = "sendArrowImage"></img> </Button> 
        </div>
      )
  }

}

export default MyComp;
