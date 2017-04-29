// @flow

import React, { Component } from "react";
import BillCalculator from "../screens/BillCalculator/components/BillCalculator.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <p>Main App</p>
        <BillCalculator />
      </div>
    );
  }
}

export default App;
