import React, { PropTypes } from "react";

class BillPersons extends React.Component {
  state: {
    persons: number
  };

  state = {
    persons: 1
  };

  onPersonsChange = (e: Event) => {
    let currentTarget = e.target;
    if (currentTarget instanceof HTMLInputElement) {
      this.setState({ persons: currentTarget.value });
    }
  }

  render() {
    return (
      <div className="columns">
        <div className="field column is-5">
          <label className="label">Persons to Pay</label>
          <p className="control">
            <input
              className="input"
              type="number"
              min="1"
              placeholder="Persons to Pay"
              value={this.state.persons}
              onChange={this.onPersonsChange}
              name="persons"
              id="persons"
            />
          </p>
        </div>
      </div>
    );
  }
}

export default BillPersons;
