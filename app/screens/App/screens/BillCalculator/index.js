import React, { Component } from "react";
import Bill from "./components/Bill.jsx";
import AddBillItem from "./components/AddBillItem.jsx";
import BillOptions from "./components/BillOptions.jsx";

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
