// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BillCalculator
  from "../screens/BillCalculator/components/BillCalculator.jsx";
import BeerExplorer from "../screens/BeerExplorer/components/BeerExplorer.jsx";
import Nav from "./Nav.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={BillCalculator} />
          <Route path="/beer-explorer" component={BeerExplorer} />
        </div>
      </Router>
    );
  }
}

export default App;
