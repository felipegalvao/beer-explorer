import React, { Component } from 'react';

class BillTotal extends Component {
  render() {
    return (
      <div className="bill-total">
        <p>Bill Total: ${this.props.billValue.toFixed(2)}</p>
      </div>
    );
  }
}

export default BillTotal;