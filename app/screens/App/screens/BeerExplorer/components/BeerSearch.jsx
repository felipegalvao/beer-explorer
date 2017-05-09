import React, { Component } from "react";
import api from "../api";

class BeerSearch extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    beerData = api.searchBeers();
    console.log(beerData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Search for a beer label"
            />
          </p>
          <p className="control">
            <button className="button is-info">
              Search
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default BeerSearch;
