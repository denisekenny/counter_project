import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from "./counters";
import {Container, Row, Col} from 'reactstrap';
import background from "./grid.jpg";

class Tetris extends Component {

  state = {
    counters: [
      { name: "Perfect Clears", id: 0, value: 0, placement: 0},
      { name: "Triple T Spins", id: 1, value: 0, placement: 1},
      { name: "The Spencers", id: 2, value: 0, placement: 2},
      { name: "I spins", id: 3, value: 0, placement: 3},
    ],
    largestKey: 3,
    largestPlacement: 3
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({counters});
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) counters[index].value--;
    this.setState({counters});
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    counters.filter(item => item.placement > counter.placement)
            .forEach(item => item.placement--)
    this.setState({ counters, largestPlacement: this.state.largestPlacement - 1});
  };

  handleAdd = (counterName) =>
  {
    const counters = [...this.state.counters];
    const theKey = this.state.largestKey + 1;
    const counter = {name: counterName, id: theKey, value: 0, placement: this.state.largestPlacement + 1};
    counters.push(counter);
    console.log(counter);
    this.setState({counters, largestKey: this.state.largestKey + 1, largestPlacement: this.state.largestPlacement + 1});
  }

  handleReset = () => {
    const counters = [...this.state.counters];
    this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  render()
  {
    return (
      <React.Fragment>
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: 2000}}>
      <main className="container" style={{position:"relative"}}>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          badgeColourZero='#292cc4'
          badgeColour="#e96a1c"
          incrementDecrementButtonColour='#ca2abb'
          delButtonColour='#cf2a33'
          inputBackground='#2bc78d'
          addResetButtonColour='#ebcd36'
          counterNamesTextColour='#ffffff'
        />
      </main>
      </div>
      </React.Fragment>
    );
  }
}

export default Tetris;
