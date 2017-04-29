import React, { Component } from "react";

class BillCalculator extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Bill Calculator</h1>
          <div className="columns">
            <div className="column is-half">
              <p>Add Bill Row</p>
            </div>
            <div className="column is-half">
              <p>Bill List</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BillCalculator;
