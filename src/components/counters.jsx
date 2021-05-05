import React, { Component} from 'react';
import Counter from "./counter";

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
      <button
        onClick={this.props.onReset}
        style={{
          fontSize: 25,
          position: 'absolute',
          left: 855,
          top: 400,
        }}
        className="btn btn-primary btn-sm m-2">Reset All</button>
      <input type="text"
      style={{
        fontSize: 25,
        position: 'absolute',
        left: 575,
        top: 210,
      }}
      onChange={this.setData}/>
      <button
      style={{
        fontSize: 25,
        position: 'absolute',
        left: 900,
        top: 200,
      }}
          onClick={() => this.props.onAdd(this.state.text)}
          className="btn btn-primary btn-sm m-2">Add</button>
        {this.props.counters.map(counter => (
          <Counter
          key={counter.id}
          onDelete={this.props.onDelete}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          counter = {counter}>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
