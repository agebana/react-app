import { take, put, call, fork, select, all } from "redux-saga/effects";
import { saga as apiSaga } from "@api";
import { saga as woofrSaga } from "@ducks/Woofr";

export default function* rootSaga() {
  yield all([
    // fork sagas here
    fork(apiSaga),
    fork(woofrSaga)
  ]);
}
