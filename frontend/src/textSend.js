import React, { Fragment , Component} from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function sayHello() {
  console.log('Hello!');
}
class TextSend extends React.Component{

  render() {
      return (
        <div class="form-inline" id = "textBar">
            <textarea class="form-control"  id="sendTextArea" placeholder="Aa" rows = '1' />
            <Button variant = "link" onClick={sayHello} id = "button"><img src={"/send-arrow.png"} id = "sendArrowImage"></img> </Button> 
        </div>
      )
  }

}

export default TextSend;
