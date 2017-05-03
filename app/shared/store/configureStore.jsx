import * as redux from "redux";
import thunk from "redux-thunk";

import {
  billReducer
} from "../../screens/App/screens/BillCalculator/reducer.js";

export const configure = () => {
  const reducer = redux.combineReducers({
    bill: billReducer
  });

  const store = redux.createStore(
    reducer,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};
