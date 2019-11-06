import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
class TextSend extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  buttonPress(e) {
    this.setState({value: e.target.value})
    if (this.state.value !== undefined && this.state.value !== '') {
      const obj = {message: this.state.value,
      name: "Brian"};
      console.log('POST SENT');
      axios.post('http://localhost:9000/api/messages/addmessage', obj)
        .then(res => console.log(res.data));
        
    }
    this.myinput.value = "";
    console.log(this.state.value);
    window.location.reload();
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
    
    console.log("text box changed"+this.state.value)
    
  }
  render() {
      return (
        <div className="form-inline" id = "textBar">
            <textarea className="form-control"  onChange={(e) => {this.handleChange(e)}} id="sendTextArea" placeholder="Type here..." rows = '1' ref={(input)=> this.myinput = input}/>
            <Button variant = "link" onClick={this.buttonPress.bind(this)} id = "button" ><img src={"/send-arrow.png"} alt = "sendImage" id = "sendArrowImage"></img> </Button> 
        </div>
      )
  }

}

export default TextSend;