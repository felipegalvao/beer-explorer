import React, { Component } from "react";
import Bill from "./Bill.jsx";
import AddBillItem from "./AddBillItem.jsx";
import BillOptions from "./BillOptions.jsx";

class BillCalculator extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Bill Calculator</h1>
          <div className="columns">
            <div className="column is-half">
              <AddBillItem />
              <BillOptions />
            </div>
            <div className="column is-half">
              <Bill />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BillCalculator;
