import React, { Fragment , Component} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
const API_URL = 'http://localhost:4000/addmessage';


function sayHello() {
  console.log('Hello!');
}
class MessagesBox extends React.Component{
  constructor(props) {
    super(props);
    this.state = {messages:[]};
  }

  componentDidMount() {
    fetch('/messages')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }
  
  render() {
    
      return (
        

        <ListGroup >
                <ListGroup.Item>Brian: Spaghetti</ListGroup.Item>
                <ListGroup.Item>Max: Putin Putout</ListGroup.Item>
                <ListGroup.Item>Shan: I missed my math midterm</ListGroup.Item>
                <ListGroup.Item>Vincent: welcome to the farmer's market</ListGroup.Item>
                <ListGroup.Item>Gideon: lol c++ embedded libraries</ListGroup.Item>
                
              </ListGroup>
      )
  }

}

export default MessagesBox;