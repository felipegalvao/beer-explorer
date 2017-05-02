import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import * as actions from "../actions";

class AddBillItem extends React.Component {
  state = {
    description: "",
    active: ""
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;

    const item = {
      description: this.state.description,
      quantity: 0
    };
    this.setState({
      description: ""
    });

    dispatch(actions.addBillItem(item));
  };

  render() {
    let beerButtonClass;
    let otherButtonClass;

    console.log(this.state.active);

    beerButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      // "is-success": this.state.active === "",
      "is-medium": true,
      "is-active": this.state.active === "beer",
      "is-info": this.state.active === "beer"
    });

    otherButtonClass = classNames({
      "add-bill-item__button": true,
      button: true,
      // "is-success": this.state.active === "",
      "is-medium": true,
      "is-active": this.state.active === "other",
      "is-info": this.state.active === "other"
    });

    return (
      <div id="add-bill-item" className="box">
        <h2 className="title is-2">Add Bill Item</h2>
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
              />
            </p>

          </div>
          <p className="control">
            <button className="button is-primary is-large">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default connect()(AddBillItem);
