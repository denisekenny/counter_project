import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home.jsx";
import Tetris from "./components/tetris.jsx";
import NavBar from "./components/navbar.jsx";
import General from "./components/general.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar style={{backgroundColor: '#071740', position:"sticky"}} variant = "dark"/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/general" exact component={() => <General />} />
          <Route path="/tetris" exact component={() => <Tetris />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
