// @flow

export const addBillItem = (billItem: Object): Object => {
	return {
		type: "ADD_BILL_ITEM",
		billItem
	}
}