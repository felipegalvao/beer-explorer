// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BillCalculator from "./screens/BillCalculator";
import BeerExplorer from "./screens/BeerExplorer";
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={BillCalculator} />
        <Route path="/beer-explorer" component={BeerExplorer} />
      </div>
    </Router>
  );
};

export default App;
