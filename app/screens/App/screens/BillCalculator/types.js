export type Action =
  | { type: "ADD_BILL_ITEM", billItem: Object }
  | { type: "UPDATE_BILL_ITEM", id: string, updates: Object }
  | { type: "DELETE_BILL_ITEM", id: string };
