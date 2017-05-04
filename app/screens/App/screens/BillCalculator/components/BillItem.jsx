import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class BillItem extends React.Component {
  state: {
    errorMessage: string
  };

  state = {
    errorMessage: ""
  };

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

  handleDecrementClick = (e: Event) => {
    const { dispatch } = this.props;

    if (this.props.quantity === 1) {
      this.setState({
        errorMessage: "Minimum quantity is 1"
      });
      setTimeout(() => {
        this.setState({
          errorMessage: ""
        });
      }, 3000);
    } else {
      const updates = {
        quantity: this.props.quantity - 1
      };

      dispatch(actions.updateBillItem(this.props.id, updates));
    }
  };

  handleDeleteClick = (e: Event) => {
    const { dispatch } = this.props;
    dispatch(actions.deleteBillItem(this.props.id));
  };

  render() {
    return (
      <div className="bill-item">
        <div className="columns">
          <div className="column is-5">
            <p>
              {this.props.description}
              <span className="bill-item__quantity">
                {" "}x{this.props.quantity}
              </span>
            </p>
          </div>
          <div className="column is-2">
            <p>${this.props.unitPrice.toFixed(2)}</p>
          </div>
          <div className="column is-2">
            <p>${(this.props.unitPrice * this.props.quantity).toFixed(2)}</p>
          </div>
          <div className="column is-1">
            <button className="button" onClick={this.handleIncrementClick}>
              +
            </button>
          </div>
          <div className="column is-1">
            <button className="button" onClick={this.handleDecrementClick}>
              -
            </button>
          </div>
          <div className="column is-1">
            <button className="button" onClick={this.handleDeleteClick}>
              X
            </button>
          </div>
        </div>

        {this.state.errorMessage
          ? <div className="columns">
              <div className="column">
                <p>{this.state.errorMessage}</p>
              </div>
            </div>
          : ""}
      </div>
    );
  }
}

export default connect()(BillItem);
