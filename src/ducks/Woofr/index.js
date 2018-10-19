import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import { fetchRandomDogs, fetchRandomDogsSuccess } from "./action";
import saga from "./saga";

export const storeKey = "woofr";

const initialState = {
  data: []
};
export default handleActions(
  {
    [fetchRandomDogs.type]: (state, action) => state,
    [fetchRandomDogsSuccess.type]: (state, action) => ({
      ...state,
      data: action.payload
    })
  },
  initialState
);

export { fetchRandomDogs, fetchRandomDogsSuccess, saga };
