import React, { Component } from 'react';
import background from "./IMG_7465.jpg";
import {Container, Row, Col} from 'reactstrap';

class Home extends Component {

  render()
  {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: 2000}}>
      <Container>
      <h4 class="text-center" style={{fontFamily:'Lucida Grande'}}> Hi! Welcome to my counters website! </h4>
      <h4 class="text-center" style={{fontFamily:'Lucida Grande'}}> I started off following Mosh's beginner react tutorial which showed how to make a counter </h4>
      <h4 class="text-center" style={{fontFamily:'Lucida Grande'}}> Then I tried to expand on it with additional functionality like adding counters and having multiple pages for counters. </h4>
      <h4 class="text-center" style={{fontFamily:'Lucida Grande'}}> I hope you like it! </h4>
      <h4 class="text-right" style={{fontFamily:'Lucida Grande'}}> -denise kenny </h4>
      </Container>
      </div>
    );
  }
}

export default Home;
