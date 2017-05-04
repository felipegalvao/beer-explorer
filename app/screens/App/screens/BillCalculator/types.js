export type Action =
  | { type: "ADD_BILL_ITEM", billItem: Object }
  | { type: "UPDATE_BILL_ITEM", id: string, updates: Object }
  | { type: "DELETE_BILL_ITEM", id: string }
  | { type: "TOGGLE_INCLUDE_TIP" }
  | { type: "SET_TIP_PERCENTAGE", tipPercentage: number }
  | { type: "SET_PERSONS_TO_PAY", personsToPay: number };
