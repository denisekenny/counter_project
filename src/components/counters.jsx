import React, { Component} from 'react';
import Counter from "./counter";
import {Button, Input} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';

class Counters extends Component
{
  state = {
    text: ""
  };

  setData = (event) =>
  {
    console.log(event);
    this.setState({text: event.target.value});
  }

  render()
  {
    return (
      <div>
        <Row className="row align-items-center">
          <Col sm = {{ size: 3, offset: 7}} align-self-center>
            <Input type="text"
              style={{
                fontSize: 25,
                position: "relative",
                color: "#000000",
                background: this.props.inputBackground,
                fontFamily: "Lucida Grande",
              }}
              onChange={this.setData}/>
          </Col>
          <Col sm = '2' align-self-center>
            <Button style=
              {{
                fontSize: 25,
                position: "relative",
                color: "#000000",
                fontFamily: "Lucida Grande",
                background: this.props.addResetButtonColour,
              }}
              onClick={() => this.props.onAdd(this.state.text)}
              className="btn btn-sm m-2">Add</Button>
          </Col>
        </Row>
        <Row>
          <Col sm = {{ size: 2, offset: 10}}>
            <Button block
              onClick={this.props.onReset}
              style={{
                fontSize: 25,
                color: "#000000",
                position: "relative",
                background: this.props.addResetButtonColour,
                fontFamily: "Lucida Grande",
              }}
              className="btn btn-primary btn-sm m-2">Reset All</Button>
          </Col>
        </Row>
        <Row>
        <Col sm='10'>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter = {counter}
            badgeColour={this.props.badgeColour}
            badgeColourZero={this.props.badgeColourZero}
            incrementDecrementButtonColour={this.props.incrementDecrementButtonColour}
            delButtonColour={this.props.delButtonColour}
            counterNamesTextColour={this.props.counterNamesTextColour}
            >
          </Counter>
      ))}
        </Col>
      </Row>
      </div>
    )
  }
}
export default Counters;
