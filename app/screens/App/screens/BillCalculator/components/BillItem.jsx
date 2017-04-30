import React from 'react';

export default class BillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<p>{this.props.description}</p>
      </div>
    );
  }
}
