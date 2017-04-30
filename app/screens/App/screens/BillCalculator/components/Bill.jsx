import React from "react";
import BillItemList from "./BillItemList.jsx";

import { connect } from "react-redux";

class Bill extends React.Component {
	render() {
		const { billItems } = this.props;

		return (
			<div className="box">
				<BillItemList billItems={billItems} />
			</div>
		);
	}
}

export default connect(state => {
	return state;
})(Bill);
