import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import { callApi } from "../../utils/api";
import { fetch_result, store_result, delete_result } from "./action";
import { CounterActionTypes } from "./types";
import { AnyAction } from "redux";

const API_ENDPOINT = "http://localhost:5000";

function* handleFetch() {
    try {
        const res = yield call(callApi, "get", API_ENDPOINT, "/counter");
        yield put(fetch_result(res));
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

function* handleStore(action: AnyAction) {
    try {
        const res = yield call(callApi, "post", API_ENDPOINT, "/counter", action.payload);
        yield put(store_result(res));
        console.log("Add to Store: ", res);
    } catch (e) {
        console.log(e);
    }
}

function* handleDelete(action: AnyAction) {
    try {
        yield call(callApi, "delete", API_ENDPOINT, `/counter/${action.payload}`);
        yield put(delete_result(action.payload));
    } catch (e) {
        console.log(e);
    }
}

function* watchFetchResult() {
    yield takeEvery(CounterActionTypes.FETCH_REQUEST, handleFetch);
}

function* watchStoreResult() {
    yield takeEvery(CounterActionTypes.STORE_REQUEST, handleStore);
}

function* watchDeleteResult() {
    yield takeEvery(CounterActionTypes.DELETE_REQUEST, handleDelete);
}

function* counterSaga() {
    yield all([fork(watchFetchResult), fork(watchStoreResult), fork(watchDeleteResult)]);
}

export default counterSaga;
