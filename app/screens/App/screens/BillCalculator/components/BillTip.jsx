import React, { PropTypes } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class BillTip extends React.Component {
  props: {
    includeTip: boolean,
    tipPercentage: number
  };

  state = {
    includeTip: false,
    tipPercentage: 10
  };

  onTipPercentageChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ tipPercentage: currentTarget.value });
    }
  };

  onIncludeTipChange = (e: Event) => {
    const { dispatch } = this.props;
    dispatch(actions.toggleIncludeTip());

    // let currentTarget = e.target;
    // if (currentTarget instanceof HTMLInputElement) {
    //   this.setState({ includeTip: currentTarget.checked });
    // }
  };

  render() {
    const {bill} = this.props;
    const {includeTip, tipPercentage} = bill;

    return (
      <div className="columns">
        <div className="field column is-2">
          <p className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={includeTip}
                onChange={this.onIncludeTipChange}
              />
              Tip?
            </label>
          </p>
        </div>
        <div className="field column is-3">
          <p className="control">
            <input
              type="number"
              name="tipPercentage"
              min="0"
              onChange={this.onTipPercentageChange}
              id="tipPercentage"
              value={tipPercentage}
              className="input"
              required
              disabled={!includeTip}
            />
          </p>
        </div>
        <div className="field column is-1">
          <p>%</p>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return state;
})(BillTip);
