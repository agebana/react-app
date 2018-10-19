import { createSelector } from "reselect";

export default createSelector(
  state => state.woofr,
  woofr => ({
    data: woofr.data
  })
);
