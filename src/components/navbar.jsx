import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

function NavBar(props){
  return(
    <div class="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
                  denise's counters!
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item ${
                  props.location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
          </li>
          <li
              class={`nav-item  ${
                props.location.pathname === "/general" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/general">
                General
              </Link>
          </li>
          <li
              class={`nav-item  ${
                props.location.pathname === "/tetris" ? "active" : ""
              }`}
            >
              <Link class="nav-link" to="/tetris">
                Tetris
              </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
  );
}

export default withRouter(NavBar);
