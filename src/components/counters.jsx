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
                background: "#e1a5e2",
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
                background: "#ffbd6c",
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
                background: "#ffbd6c",
                fontFamily: "Lucida Grande",
              }}
              className="btn btn-primary btn-sm m-2">Reset All</Button>
          </Col>
        </Row>
        <Row>
        <Col sm='12'>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter = {counter}>
          </Counter>
      ))}
        </Col>
      </Row>
      </div>
    )
  }
}
export default Counters;
