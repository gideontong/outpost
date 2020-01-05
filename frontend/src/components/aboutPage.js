import React from "react";
import './aboutPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

function aboutPage(props) {
  return (
    <div>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous" />
      <h1 class="text-center">About Outpost: </h1>
      <Jumbotron fluid>
        <Container>
          <h1 class="pb-4 text-center">The Developers, Designers, and Builders</h1>
          <Row>
            <Col>
              <div class="text-center">
                <Image className="image" src="/placeholder_white.png" rounded />
                <h3 class="pt-2">Gideon Tong</h3>
                <p class="pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
              <div class="text-center">
                <a href="https://github.com/gideontong/">
                  <button type="button" class="btn btn-primary bmd-btn-fab">
                    <span><img className="icons" src="/github_icon.png"></img></span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/gideontong/">
                  <button type="button" class="btn btn-primary bmd-btn-fab">
                    <span><img className="icons2" src="/linkedin_icon.png"></img></span>
                  </button>
                </a>
              </div>
            </Col>
            <Col>
              <div class="text-center">
                <Image className="image" src="/placeholder_white.png" rounded />
                <h3 class="pt-2">Brian Lam</h3>
                <p class="pt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
              <div class="text-center">
                <a href="https://github.com/Brooseidon/">
                  <button type="button" class="btn btn-primary bmd-btn-fab">
                    <span><img className="icons" src="/github_icon.png"></img></span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/brian-lam-2955b5165/">
                  <button type="button" class="btn btn-primary bmd-btn-fab">
                    <span><img className="icons2" src="/linkedin_icon.png"></img></span>
                  </button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

      </Jumbotron>
      <p class="text-center"> Developed, designed, and built by: Gideon Tong and Brian Lam
        <br></br>Was built for the IEEE QP++ program at University of California: San Diego
      </p>
    </div>
  )
}

export default aboutPage;
