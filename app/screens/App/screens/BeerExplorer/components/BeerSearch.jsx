import React, { Component } from "react";

class BeerSearch extends Component {
  render() {
    return (
      <div className="field has-addons">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="Find a repository"
          />
        </p>
        <p className="control">
          <a className="button is-info">
            Search
          </a>
        </p>
      </div>
    );
  }
}

export default BeerSearch;
