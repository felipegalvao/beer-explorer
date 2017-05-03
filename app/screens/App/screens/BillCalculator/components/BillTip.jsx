import React, { PropTypes } from "react";

class BillTip extends React.Component {
  state: {
    tipPercentage: number
  };

  state = {
    tipPercentage: 10
  };
  
  render() {
    return (
      <div className="columns">
        <div className="field column is-2">
          <p className="control">
            <label className="checkbox">
              <input type="checkbox" />
              Tip?
            </label>
          </p>
        </div>
        <div className="field column is-3">
          <p className="control">
            <input
              type="number"
              step="1"
              name="tipPercentage"
              onChange={this.onTipPercentageChange}
              id="tipPercentage"
              value={this.state.tipPercentage}
              className="input"
              required
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

export default BillTip;
