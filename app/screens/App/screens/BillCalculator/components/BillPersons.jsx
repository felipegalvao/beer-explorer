import React, { PropTypes } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class BillPersons extends React.Component {
  onPersonsChange = (e: Event) => {
    const { dispatch } = this.props;
    let currentTarget = e.target;

    if (currentTarget instanceof HTMLInputElement) {
      const personsToPay = currentTarget.value;
      dispatch(actions.setPersonsToPay(personsToPay));
    }
  };

  render() {
    const {personsToPay} = this.props.bill;

    return (
      <div className="columns">
        <div className="field column is-5">
          <label className="label">Persons that will Pay</label>
          <p className="control">
            <input
              className="input"
              type="number"
              min="1"
              placeholder="Persons to Pay"
              value={personsToPay}
              onChange={this.onPersonsChange}
              name="personsToPay"
              id="personsToPay"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(BillPersons);
