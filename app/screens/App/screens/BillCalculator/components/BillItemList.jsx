import React from "react";
import BillItem from "./BillItem.jsx";
import PropTypes from 'prop-types';

export default class BillItemsList extends React.Component {
	static propTypes = {
		billItems: PropTypes.arrayOf(PropTypes.object)
	};

	constructor(props) {
		super(props);
	}

	render() {
		const billItems = this.props.billItems.map((billItem, index) => (
			<BillItem key={index} {...billItem} />
		));

		return (
			<div className="bill-items-list">
				{billItems}
			</div>
		);
	}
}
