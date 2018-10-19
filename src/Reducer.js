import { combineReducers } from "redux";
import woofrReducer, { storeKey as woofrReducerKey } from "@ducks/Woofr";

const rootReducer = (state = {}, action) => state;

export default combineReducers({
  root: rootReducer,
  [woofrReducerKey]: woofrReducer
});
