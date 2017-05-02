// @flow

import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "../actions";

// declare var currentTarget: HTMLInputElement;

class AddBillItem extends React.Component {
  state = {
    description: "",
    active: "",
    errorMessage: ""
  };

  handleDescriptionChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({
        description: currentTarget.value
      });
    }
  };

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { dispatch } = this.props;

    if (this.state.active !== "") {
      const item = {
        description: this.state.description,
        quantity: 1,
        price: 25.00,
        type: this.state.active
      };

      this.setState({
        description: "",
        active: "",
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
          <div className="field">
            <label className="label">Label / Item</label>
            <p className="control">
              <input
                type="text"
                name="description"
                onChange={this.handleDescriptionChange}
                id="description"
                value={this.state.description}
                className="input" 
                required
              />
            </p>
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
