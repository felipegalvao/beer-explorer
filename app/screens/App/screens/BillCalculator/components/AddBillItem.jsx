import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class AddBillItem extends React.Component {
	state = {
		description: ""
	};

	handleDescriptionChange = e => {
		this.setState({
			description: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { dispatch } = this.props;

		const item = {
			description: this.state.description,
			quantity: 0,
		};
		this.setState({
			description: ""
		});

		dispatch(actions.addBillItem(item));
	};

	render() {
		return (
			<div id="add-bill-item" className="box">
				<h2 className="title is-2">Add Bill Item</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="description"
						onChange={this.handleDescriptionChange}
						id="description"
						value={this.state.description}
					/>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default connect()(AddBillItem);
