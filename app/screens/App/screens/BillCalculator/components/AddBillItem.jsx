// @flow

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "../actions";

// declare var currentTarget: HTMLInputElement;

class AddBillItem extends React.Component {
  state = {
    formFields: {
      description: "",
      active: "",
      unitPrice: ""
    },
    errorMessage: ""
  };

  onInputChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      const formFields = this.state.formFields;
      formFields[currentTarget.name] = currentTarget.value;
      this.setState({ formFields });
    }
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { dispatch } = this.props;

    if (this.state.formFields.active !== "") {
      const item = {
        description: this.state.formFields.description,
        quantity: 1,
        unitPrice: parseFloat(this.state.formFields.unitPrice),
        type: this.state.formFields.active
      };

      this.setState({
        formFields: {
          description: "",
          active: "",
          unitPrice: ""
        },
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
    let beerButtonClass;
    let otherButtonClass;

    beerButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      "is-medium": true,
      "is-active": this.state.formFields.active === "beer",
      "is-info": this.state.formFields.active === "beer"
    });

    otherButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      "is-medium": true,
      "is-active": this.state.formFields.active === "other",
      "is-info": this.state.formFields.active === "other"
    });

    return (
      <div id="add-bill-item" className="box">
        <h2 className="title is-2 has-text-centered">Add Bill Item</h2>
        <button
          className={beerButtonClass}
          onClick={() =>
            this.setState({
              formFields: { ...this.state.formFields, active: "beer" }
            })}
        >
          Beer
        </button>
        <button
          className={otherButtonClass}
          onClick={() =>
            this.setState({
              formFields: { ...this.state.formFields, active: "other" }
            })}
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
                  onChange={this.onInputChange}
                  id="description"
                  value={this.state.formFields.description}
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
                  onChange={this.onInputChange}
                  id="unitPrice"
                  value={this.state.formFields.unitPrice}
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
