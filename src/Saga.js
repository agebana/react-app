import { take, put, call, fork, select, all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    // fork sagas here
  ]);
}
