import * as types from "./actionTypes";
import {
    take,
    takeEvery,
    takeLatest,
    put,
    call,
    all,
    delay,
    fork
} from "redux-saga/effects";
import { loadUsersSuccess, loadUsersError} from "./actions";
import { loadUsersApi } from "./api";

export function* onLoadUsersStartAsync(){
    try {
        const response = yield call(loadUsersApi)
        if (response.status === 200) {
            yield delay(500)
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersError(error.response.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

const usersSagas = [
    fork(onLoadUsers)
];

export default function* rootSaga(){
    yield all([...usersSagas]);
}