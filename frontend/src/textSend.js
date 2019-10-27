import React, { Fragment , Component} from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class TextSend extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      value: 'spaghet test'
    }
  }
  buttonPress(e) {
    this.setState({value: e.target.value})
    if (this.state.value != undefined) {
      const obj = {message: this.state.value,
      name: "bob ross"};
      console.log('POST SENT');
      axios.post('http://localhost:4000/addmessage', obj)
        .then(res => console.log(res.data));
    }
    this.myinput.value = "";
    console.log(this.state.value);
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
    
    console.log("text box changed"+this.state.value)
    
  }
  render() {
      return (
        <div className="form-inline" id = "textBar">
            <textarea className="form-control"  onChange={(e) => {this.handleChange(e)}} id="sendTextArea" placeholder="Aa" rows = '1' ref={(input)=> this.myinput = input}/>
            <Button variant = "link" onClick={this.buttonPress.bind(this)} id = "button" ><img src={"/send-arrow.png"} id = "sendArrowImage"></img> </Button> 
        </div>
      )
  }

}

export default TextSend;
