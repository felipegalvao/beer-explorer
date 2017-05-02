// @flow
import {Action} from "./types";

export const addBillItem = (billItem: Object): Action => {
	return {
		type: "ADD_BILL_ITEM",
		billItem
	}
}

export const updateBillItem = (id: string, updates: Object): Action => {
	return {
		type: "UPDATE_BILL_ITEM",
		id,
		updates
	}
}