import React from "react";
import BillItemList from "./BillItemList.jsx";
import BillTotal from "./BillTotal.jsx";

import { connect } from "react-redux";

class Bill extends React.Component {
  render() {
    const { bill } = this.props;
    const billItems = bill.billItems;
    const includeTip = bill.includeTip;
    const tipPercentage = bill.tipPercentage;
    let billValue = 0;

    // Calculate total value of the bill
    for (let i = 0; i < billItems.length; i++) {
      billValue += billItems[i].unitPrice * billItems[i].quantity;
    }

    console.log(includeTip);

    if (includeTip) {
      billValue = billValue + (billValue * tipPercentage / 100);
    }

    return (
      <div className="box">
        <h2 className="title is-2 has-text-centered">Add Bill Item</h2>
        {billItems.length > 0
          ? ""
          : <p>Your Bill does not have any items</p>}
        <BillItemList billItems={billItems} />
        {billItems.length > 0
          ? <BillTotal billValue={billValue} />
          : ""}
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(Bill);
