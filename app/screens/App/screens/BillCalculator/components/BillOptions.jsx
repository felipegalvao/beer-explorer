import React, { Component } from "react";

import BillTip from "./BillTip.jsx";

class BillOptions extends Component {
  onTipPercentageChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({
        tipPercentage: currentTarget.value
      });
    }
  };

  render() {
    return (
      <div className="box" id="bill-options">
        <h2 className="title is-2 has-text-centered">Bill Options</h2>
        <BillTip />
      </div>
    );
  }
}

export default BillOptions;
