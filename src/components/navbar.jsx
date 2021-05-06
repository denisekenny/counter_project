import React, { Component } from 'react';

//stateless functional component
const NavBar = (props) => {
  return(
    <nav className="navbar navbar-expand-md navbar-sticky bg-dark">
      <a class="navbar-brand" href="#">denise's counters</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar
