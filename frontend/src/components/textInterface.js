import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagesBox from './MessagesBox'
import TextSend from './TextSend'
import Form from 'react-bootstrap/Form'

class textInterface extends React.Component{
  render() {
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
    )
  }

}

export default textInterface;
