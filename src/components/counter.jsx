import React, { Component } from 'react';
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
        {this.props.children}

        <h4 style={{
          fontSize: 30,
          position: 'absolute',
          left: 100,
          top: this.props.counter.placement * 150 + 150
        }}>{this.props.counter.name}</h4>

        <span style={{
          fontSize: 30,
          position: 'absolute',
          left: 100,
          top: this.props.counter.placement * 150 + 200,
          }} className={this.getBadgesClasses()}>{this.formatCount()}
        </span>
        <button style={{
          fontSize: 23,
          position: 'absolute',
          left: 200,
          background: '#ffe577',
          borderWidth: 2,
          borderColor: '#0000000',

          top: this.props.counter.placement * 150 + 200,
        }} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-light btn-sm m-2"> + </button>
        <button style={{
          fontSize: 23,
          position: 'absolute',
          left: 250,
          background: '#ffe577',
          borderWidth: 2,
          borderColor: '#0000000',
          top: this.props.counter.placement * 150 + 200,
        }} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-light btn-sm m-2"> - </button>
        <button style={{
          fontSize: 30,
          fontSize: 23,
          position: 'absolute',
          left: 300,
          top: this.props.counter.placement * 150 + 200,
        }} onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-danger btn-sm m-2"> del </button>
      </div>
    );
  }

  getBadgesClasses()
  {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount()
  {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
