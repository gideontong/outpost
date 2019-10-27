import React, { Fragment , Component} from "react";
import Pusher from 'pusher-js';
const API_URL = 'http://localhost:9000/addmessage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
function sayHello() {
  console.log('Hello!');
}
class MessagesBox extends React.Component{
  
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
