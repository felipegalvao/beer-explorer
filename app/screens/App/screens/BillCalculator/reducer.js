// @flow

type addBillItemActionType = {type: string, billItem: Object}

export const billItemsReducer = (
  state: Array<Object> = [],
  action: addBillItemActionType
): Array<Object> => {
  switch (action.type) {
    case "ADD_BILL_ITEM":
      return [...state, action.billItem];
    default:
      return state;
  }
};
