import React, { Component } from "react";

import BeerSearch from "./components/BeerSearch.jsx";

class BeerExplorer extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-centered">Beer Explorer</h1>
          <BeerSearch />
        </div>
      </section>
    );
  }
}

export default BeerExplorer;
