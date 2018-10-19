import { createAction as createActionBase } from "redux-actions";

const namespace = "API";
const createAction = (actionType, ...args) =>
  createActionBase(`${namespace}/${actionType}`, ...args);

export const fetchRandomDogs = createAction("FETCH_RANDOM_DOGS");
