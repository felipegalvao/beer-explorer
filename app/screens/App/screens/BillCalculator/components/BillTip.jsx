import React, { PropTypes } from "react";

class BillTip extends React.Component {
  state: {
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
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ includeTip: currentTarget.checked });
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="field column is-2">
          <p className="control">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={this.state.includeTip}
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
              value={this.state.tipPercentage}
              className="input"
              required
              disabled={!this.state.includeTip}
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
