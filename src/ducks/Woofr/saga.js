import { takeLatest, call, put } from "redux-saga/effects";
import { fetchRandomDogs, fetchRandomDogsSuccess } from "./action";

function* fetchRandomDogsFlow({ payload }) {
  yield put({ type: "HELLO_WORLD", payload });
  yield put({
    type: fetchRandomDogsSuccess.type,
    payload: ["dog1", "dog2"]
  });
}

export default function* saga() {
  yield takeLatest(fetchRandomDogs, fetchRandomDogsFlow);
}
