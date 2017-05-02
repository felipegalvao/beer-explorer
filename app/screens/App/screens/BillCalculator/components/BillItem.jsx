import React from "react";

export default class BillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bill-item columns">
        <div className="column is-7">
          <p>
            {this.props.description}
            {" "}
            <span className="bill-item__quantity">x{this.props.quantity}</span>
          </p>
        </div>
        <div className="column is-2">
          <p>${this.props.price.toFixed(2)}</p>
        </div>
        <div className="column is-1">
          <button className="button">+</button>
        </div>
        <div className="column is-1">
          <button className="button">-</button>
        </div>
        <div className="column is-1">
          <button className="button">X</button>
        </div>
      </div>
    );
  }
}
