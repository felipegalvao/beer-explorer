import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class BillItem extends React.Component {
  props: {
    id: string,
    description: string,
    quantity: number,
    unitPrice: number
  };

  handleIncrementClick = (e: Event) => {
    const { dispatch } = this.props;

    const updates = {
      quantity: this.props.quantity + 1
    };

    dispatch(actions.updateBillItem(this.props.id, updates));
  };

  render() {
    return (
      <div className="bill-item columns">
        <div className="column is-7">
          <p>
            {this.props.description}
            <span className="bill-item__quantity"> x{this.props.quantity}</span>
          </p>
        </div>
        <div className="column is-2">
          <p>${this.props.unitPrice.toFixed(2)}</p>
        </div>
        <div className="column is-1">
          <button className="button" onClick={this.handleIncrementClick}>
            +
          </button>
        </div>
        <div className="column is-1">
          <button className="button">-</button>
        </div>
        <div className="column is-1">
          <button className="button">X</button>
        </div>
      </div>
    );
  }
}

export default connect()(BillItem);
