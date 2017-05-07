import React, { Component } from 'react';

export class BillTotal extends Component {
  render() {
    return (
      <div className="bill-total">
        <p>Bill Total: ${this.props.billValue.toFixed(2)}</p>
        <p>Each one pays: ${this.props.valuePerPerson.toFixed(2)}</p>
      </div>
    );
  }
}

export default BillTotal;
