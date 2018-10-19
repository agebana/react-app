import { take, put, call, fork, select, all } from "redux-saga/effects";
import { saga as apiSaga } from "./api";

export default function* rootSaga() {
  yield all([
    // fork sagas here
    apiSaga
  ]);
}
