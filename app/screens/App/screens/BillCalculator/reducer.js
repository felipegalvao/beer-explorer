// @flow
import { Action } from "./types";

type State = {
  includeTip: boolean,
  tipPercentage: number,
  billItems: Array<{
    id: string,
    description: string,
    quantity: number,
    unitPrice: number,
    type: string
  }>
};

const initialState = {
  includeTip: true,
  tipPercentage: 10,
  billItems: []
};

export const billReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case "ADD_BILL_ITEM":
      return {
        ...state,
        billItems: state.billItems.concat(action.billItem)
      };
    case "UPDATE_BILL_ITEM":
      const updatedBillItems = state.billItems.map(billItem => {
        if (billItem.id === action.id) {
          return {
            ...billItem,
            ...action.updates
          };
        } else {
          return billItem;
        }
      })
      return {
        ...state,
        billItems: updatedBillItems
      };
    case "DELETE_BILL_ITEM":
      const filteredBillItems = state.billItems.filter(billItem => {
        return billItem.id !== action.id;
      })
      return {
        ...state,
        billItems: filteredBillItems
      };
    case "TOGGLE_INCLUDE_TIP":
      return {
        ...state,
        includeTip: !state.includeTip
      }
    default:
      return state;
  }
};
