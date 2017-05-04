import React, { Component } from "react";
import { Link } from "react-router-dom";

const Nav = props => (
  <nav className="nav">
    <div className="nav-left">
      <a className="nav-item">
        <h1>Beer Explorer</h1>
      </a>
    </div>

    <div className="nav-center">
      <Link to="/beer-explorer" className="nav-item">
        <span className="icon">
          <i className="fa fa-beer" />
        </span> Beers
      </Link>
      <Link to="/" className="nav-item">
        <span className="icon">
          <i className="fa fa-list" />
        </span> Bill Calculator
      </Link>
    </div>

    <span className="nav-toggle">
      <span />
      <span />
      <span />
    </span>

    <div className="nav-right nav-menu">
      <a className="nav-item">
        EN
      </a>
      <a className="nav-item">
        PT-BR
      </a>
    </div>
  </nav>
);

export default Nav;
