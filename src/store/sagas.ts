import { all, fork } from "redux-saga/effects";
import counterSaga from "./counter/sagas";

export function* rootSaga() {
    yield all([fork(counterSaga)]);
}
