import { takeLatest, call, put } from "redux-saga/effects";
import { fetchRandomDogs } from "./Action";

function* fetchRandomDogsFlow(action) {
  yield put({ type: "HELLO_WORLD", payload: "FOO_BAR" });
}

export default function* saga() {
  yield takeLatest(fetchRandomDogs, fetchRandomDogsFlow);
}
