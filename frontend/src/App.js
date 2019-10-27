import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


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

import TextSend from './TextSend'
import MessagesBox from './MessagesBox'
function App() {  

  

  return (
    
    <div className="row"> 
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      <div className="center">
          <Form id = "textMessagingArea" method = "post" action = "/addmessage">
              <MessagesBox/>
              
                <TextSend/>
              
          </Form>
      </div>
  </div>
  );
}

export default App;
