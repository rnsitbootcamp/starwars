import { createStore, applyMiddleware } from "redux";
import { multiClientMiddleware } from "redux-axios-middleware";
import thunkMiddleware from "redux-thunk";
import clients from "./clients";
import rootReducer from "../reducers";

const middlewares = [
  thunkMiddleware,
  multiClientMiddleware(clients),
];

export default function() {
  let store = createStore(rootReducer, 
    applyMiddleware(...middlewares),
  );
  
  return store;
};
