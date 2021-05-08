import React, { Component } from 'react';
import {Button, Badge} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

class Counter extends Component
{
  state = {}

  //This is called after the component is updated
  componentDidUpdate(prevProps, prevState)
  {
    if(prevProps.counter.value !== this.props.counter.value)
    {
      //call to get new data from server
    }
  }

  render()
  {
    return (
    <div>
      <Row>
      <h4 style={{
        fontSize: 30,
        fontFamily: "Lucida Grande",
        color: this.props.counterNamesTextColour,
      }}>{this.props.counter.name}</h4>
      </Row>

      <Row className="row align-items-center">
        <Col sm='1'>
        <Badge pill block={true} style={{
          fontSize: 23,
          fontFamily: "Lucida Grande",
          background: this.getBadgeColour(),
          width: 70,
          borderColor: '#57296b',
          height: 46,
          }} className={this.getBadgesClasses()}>{this.formatCount()}
        </Badge>
        </Col>
        <Col sm='1'>
        <Button style={{
          fontSize: 23,
          fontFamily: "Lucida Grande",
          background: this.props.incrementDecrementButtonColour,
          color: '#000000',
          borderWidth: 2,
          borderColor: '#57296b',
        }} onClick={() => this.props.onIncrement(this.props.counter)} block={true} className="btn btn-sm m-2"> + </Button>
        </Col>
        <Col sm='1'>
        <Button style={{
          fontSize: 23,
          fontFamily: "Lucida Grande",
          color: '#000000',
          background: this.props.incrementDecrementButtonColour,
          borderWidth: 2,
          borderColor: '#57296b',
        }} onClick={() => this.props.onDecrement(this.props.counter)} block={true} className="btn btn-sm m-2"> - </Button>
        </Col>
        <Col sm='1'>
        <Button style={{
          background: this.props.delButtonColour,
          fontFamily: "Lucida Grande",
          borderWidth: 2,
          color: '#000000',
          borderColor: '#57296b',
          fontSize: 23,
        }} onClick={() => this.props.onDelete(this.props.counter)} block className="btn btn-sm m-2"> del </Button>
        </Col>
        </Row>
      </div>
    );
  }

  getBadgesClasses()
  {
    let classes = "badge d-inline-flex align-items-center justify-content-start m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }

  getBadgeColour()
  {
    console.log(this.props.badgeColourZero);
    if(this.props.counter.value === 0)
    {
      return this.props.badgeColourZero;
    }
    else {
      return this.props.badgeColour;
    }
  }

  formatCount()
  {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
