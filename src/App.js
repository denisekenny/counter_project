import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {

  state = {
    counters: [
      { name: "How many hippos?", id: 0, value: 0, placement: 0},
      { name: "Number of freckles", id: 1, value: 0, placement: 1},
      { name: "Let's count grains of sand!", id: 2, value: 0, placement: 2},
    ],
    largestKey: 2,
    largestPlacement: 2
  };

  constructor()
  {
    super();
    //you could initialize state here
    console.log('App - Constructor');
  }

  //get data from server then setState with data
  componentDidMount()
  {
    console.log('App - Mounted');
  }

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
    console.log('App - Rendered'); //rendered means in the DOM (before being mounted)
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </main>
      </React.Fragment>
    );
  }
}

export default App;
