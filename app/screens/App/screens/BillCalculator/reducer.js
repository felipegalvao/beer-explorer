// @flow
import { Action } from "./types";

type State = Array<{
  id: string,
  description: string,
  quantity: number,
  unitPrice: number,
  type: string
}>;

export const billItemsReducer = (
  state: State = [],
  action: Action
): Array<Object> => {
  switch (action.type) {
    case "ADD_BILL_ITEM":
      return [...state, action.billItem];
    case "UPDATE_BILL_ITEM":
      return state.map(billItem => {
        if (billItem.id === action.id) {
          return {
            ...billItem,
            ...action.updates
          };
        } else {
          return billItem;
        }
      });
    default:
      return state;
  }
};
