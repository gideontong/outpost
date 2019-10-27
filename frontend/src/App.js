import React, { Fragment , Component} from "react";
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import InputGroupAppend  from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'

require
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

import textSend from './textSend'

function App() {  

  function sayHello() {
    console.log('Hello!');
  }

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
              
                
              
          </Form>
      </div>
  </div>
  );
}

export default App;
