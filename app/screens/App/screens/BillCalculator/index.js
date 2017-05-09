import React, { Component } from "react";
import Bill from "./components/Bill.jsx";
import AddBillItem from "./components/AddBillItem.jsx";
import BillOptions from "./components/BillOptions.jsx";
import { connect } from "react-redux";

const BillCalculator = ({ bill }) => {
  const billItems: ArrayOf<Object> = bill.billItems;
  console.log(billItems);
  const includeTip: boolean = bill.includeTip;
  const tipPercentage: number = bill.tipPercentage;
  const personsToPay: number = bill.personsToPay;
  let billValue = 0;

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
            <Bill
              billItems={billItems}
              includeTip={includeTip}
              tipPercentage={tipPercentage}
              personsToPay={personsToPay}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// function mapStateToProps(state) {
//   return { bill: state.bill };
// };

export default connect(state => {
  return state;
})(BillCalculator);
