import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class MessagesBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {messages:[]};
  }

  componentDidMount = async () => {
    console.log("RAN");
    let res = await axios.get('http://localhost:9000/api/messages/getMessages');
    let data = res.data;
    const messages = data.map(obj => ({ 
      message: obj.desc,
      name: obj.name}))
      this.setState({ messages });
          
       console.log(this.state.messages[0]);
  };
  
  render() {
    
      return (
        

        <ListGroup >
                {this.state.messages[this.state.messages.length-5] !== undefined ? (<ListGroup.Item> {this.state.messages[this.state.messages.length-5].name +': '+this.state.messages[this.state.messages.length-5].message}</ListGroup.Item>) : console.log(":(")}
                {this.state.messages[this.state.messages.length-4] !== undefined ? (<ListGroup.Item> {this.state.messages[this.state.messages.length-4].name +': '+this.state.messages[this.state.messages.length-4].message}</ListGroup.Item>) : console.log(":(")}
                {this.state.messages[this.state.messages.length-3] !== undefined ? (<ListGroup.Item> {this.state.messages[this.state.messages.length-3].name +': '+this.state.messages[this.state.messages.length-3].message}</ListGroup.Item>) : console.log(":(")}
                {this.state.messages[this.state.messages.length-2] !== undefined ? (<ListGroup.Item> {this.state.messages[this.state.messages.length-2].name +': '+this.state.messages[this.state.messages.length-2].message}</ListGroup.Item>) : console.log(":(")}
                {this.state.messages[this.state.messages.length-1] !== undefined ? (<ListGroup.Item> {this.state.messages[this.state.messages.length-1].name +': '+this.state.messages[this.state.messages.length-1].message}</ListGroup.Item>) : console.log(":(")}
              </ListGroup>
      )
  }

}

export default MessagesBox;
