import React from "react";
import './aboutPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
/*class homePage extends React.Component{
  
  
  
  render() {
    
      return (
        <div>

          <h1>Welcome to Outpost</h1>
        </div>

        
      )
  }

}*/
function aboutPage(props){
  return (
    <div class = "text-center">

      <h1>About Outpost: </h1>
      <Jumbotron fluid>
        <Container >
          <h1 class = "pb-4">The Developers, Designers, and Builders</h1>
          <Row>
            <Col>
              <Image className = "image" src = "/placeholder_white.png" rounded/>
              <h3 class = "pt-2">Gideon Tong</h3>
            </Col>
            <Col >
              <Image className = "image" src = "/placeholder_white.png" rounded/>
              <h3 class = "pt-2">Brian Lam</h3>
            </Col>
          </Row>
        </Container>

      </Jumbotron>
      <p class = "text-center"> Developed, designed, and built by: Gideon Tong and Brian Lam
        <br></br>Was built for the IEEE QP++ program at University of California: San Diego
      </p>
    </div>

    
  )
}

export default aboutPage;
