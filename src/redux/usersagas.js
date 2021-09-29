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
import { loadUsersSuccess, loadUsersError, createUserSuccess, createUserError} from "./actions";
import { loadUsersApi, createUserApi } from "./api";

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


export function* onCreateUserStartAsync({payload}){
    try {
        const response = yield call(createUserApi, payload)
        if (response.status === 200) {
            yield put(createUserSuccess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

export function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

export function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

const usersSagas = [
    fork(onLoadUsers),
    fork(onCreateUser)
];

export default function* rootSaga(){
    yield all([...usersSagas]);
}