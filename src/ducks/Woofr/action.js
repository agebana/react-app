import { createAction, handleActions } from "redux-actions";

const prefix = "WOOFR";

const prefixedAction = (actionType, ...args) => {
  const action = createAction(`[${prefix}] ${actionType}`);
  action.type = actionType;
  return action;
};

export const fetchRandomDogs = prefixedAction("FETCH_RANDOM_DOGS");
export const fetchRandomDogsSuccess = prefixedAction(
  "FETCH_RANDOM_DOGS_SUCCESS"
);
