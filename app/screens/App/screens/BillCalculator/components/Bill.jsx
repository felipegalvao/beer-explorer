import React from "react";
import BillItemList from "./BillItemList.jsx";

import { connect } from "react-redux";

class Bill extends React.Component {
  render() {
    const { billItems } = this.props;

    return (
      <div className="box">
        <h2 className="title is-2 has-text-centered">Add Bill Item</h2>
        {billItems.length > 0 ? "" : <p>Your Bill still does not have any items</p>}
        <BillItemList billItems={billItems} />
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(Bill);
