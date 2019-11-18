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
    <div >

      <h1 class = "text-center">About Outpost: </h1>
      <Jumbotron fluid>
        <Container>
          <h1 class = "pb-4 text-center">The Developers, Designers, and Builders</h1>
          <Row>
            <Col>
              <div class = "text-center">
                <Image className = "image" src = "/placeholder_white.png" rounded/>
                <h3 class = "pt-2">Gideon Tong</h3>
                <p class = "pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            </Col>
            <Col>
              <div class = "text-center">
                <Image className = "image" src = "/placeholder_white.png" rounded/>
                <h3 class = "pt-2">Brian Lam</h3>
                <p class = "pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
                <div class = "text-left">
                  <Image className = "icons" class = "inline"src = "/github_icon.png" rounded/>
                  <p className = "linkText">
                    <a href="https://github.com/Brooseidon">@Brooseidon</a>
                  </p>
                  
                  <Image className = "icons" src = "/linkedin_icon.png" rounded/>
                  <p className = "linkText">
                    <a href="https://www.linkedin.com/in/brian-lam-2955b5165/">@Brian Lam</a>
                  </p>
                </div>
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
