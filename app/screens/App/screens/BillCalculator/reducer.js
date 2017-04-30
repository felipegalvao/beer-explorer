export const billItemsReducer = (state=[], action) => {
	switch (action.type) {
		case "ADD_BILL_ITEM":
			return [...state, action.billItem]
		default:
			return state
	}
}