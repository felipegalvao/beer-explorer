// @flow
import { Action } from "./types";

export const addBillItem = (billItem: Object): Action => {
  return {
    type: "ADD_BILL_ITEM",
    billItem
  };
};

export const updateBillItem = (id: string, updates: Object): Action => {
  return {
    type: "UPDATE_BILL_ITEM",
    id,
    updates
  };
};

export const deleteBillItem = (id: string): Action => {
  return {
    type: "DELETE_BILL_ITEM",
    id
  };
};

export const toggleIncludeTip = (): Action => {
  return {
    type: "TOGGLE_INCLUDE_TIP"
  };
};

export const setTipPercentage = (tipPercentage: number): Action => {
  return {
    type: "SET_TIP_PERCENTAGE",
    tipPercentage
  };
};

export const setPersonsToPay = (personsToPay: number): Action => {
  return {
    type: "SET_PERSONS_TO_PAY",
    personsToPay
  };
};
