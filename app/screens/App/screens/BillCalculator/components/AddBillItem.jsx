// @flow

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "../actions";

class AddBillItem extends React.Component {
  state: {
    description: string,
    active: string,
    unitPrice: number,
    errorMessage: string
  };

  state = {
    description: "",
    active: "",
    unitPrice: 0,
    errorMessage: ""
  };

  onDescriptionChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ description: currentTarget.value });
    }
  };

  onUnitPriceChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ unitPrice: parseFloat(currentTarget.value) });
    }
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { dispatch } = this.props;

    if (this.state.active !== "") {
      const item = {
        description: this.state.description,
        quantity: 1,
        unitPrice: parseFloat(this.state.unitPrice),
        type: this.state.active
      };

      this.setState({
        description: "",
        active: "",
        unitPrice: 0,
        errorMessage: ""
      });

      dispatch(actions.addBillItem(item));
    } else {
      this.setState({
        errorMessage: "You must select a type above to include a Bill Item"
      });
    }
  };

  render() {
    let beerButtonClass: string;
    let otherButtonClass: string;

    beerButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      "is-medium": true,
      "is-active": this.state.active === "beer",
      "is-info": this.state.active === "beer"
    });

    otherButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      "is-medium": true,
      "is-active": this.state.active === "other",
      "is-info": this.state.active === "other"
    });

    return (
      <div id="add-bill-item" className="box">
        <h2 className="title is-2 has-text-centered">Add Bill Item</h2>
        <button
          className={beerButtonClass}
          onClick={() => this.setState({ active: "beer" })}
        >
          Beer
        </button>
        <button
          className={otherButtonClass}
          onClick={() => this.setState({ active: "other" })}
        >
          Other
        </button>
        <form onSubmit={this.handleSubmit} className="add-bill-item__form">
          <div className="columns">
            <div className="field column is-9">
              <label className="label">Label / Item</label>
              <p className="control">
                <input
                  type="text"
                  name="description"
                  onChange={this.onDescriptionChange}
                  id="description"
                  value={this.state.description}
                  className="input"
                  required
                />
              </p>
            </div>
            <div className="field column is-3">
              <label className="label">Unit Price</label>
              <p className="control">
                <input
                  type="number"
                  step="0.01"
                  name="unitPrice"
                  onChange={this.onUnitPriceChange}
                  id="unitPrice"
                  value={this.state.unitPrice}
                  className="input"
                  required
                />
              </p>
            </div>
          </div>
          <p className="control">
            <button className="button is-primary is-large">Submit</button>
          </p>
        </form>
        {this.state.errorMessage === "" ? "" : <p>{this.state.errorMessage}</p>}
      </div>
    );
  }
}

export default connect()(AddBillItem);
