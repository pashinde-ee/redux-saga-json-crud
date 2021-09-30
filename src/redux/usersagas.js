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
import { loadUsersSuccess, loadUsersError, createUserSuccess, createUserError, deleteUserSuccess, deleteUserError} from "./actions";
import { loadUsersApi, createUserApi, deleteUserApi } from "./api";

function* onLoadUsersStartAsync(){
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


function* onCreateUserStartAsync({payload}){
    try {
        const response = yield call(createUserApi, payload)
        if (response.status === 200) {
            yield put(createUserSuccess(response.data))
        }
    } catch (error) {
        yield put(createUserError(error.response.data))
    }
}

function* onDeleteUserStartAsync(userId){
    try {
        console.log(userId)
        const response = yield call(deleteUserApi, userId)
        if (response.status === 200) {
            yield delay(500)
            yield put(deleteUserSuccess(userId))
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data))
    }
}


function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync)
}

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync)
}

function* onDeleteUser() {
    while(true) {
        const {payload} = yield take(types.DELETE_USER_START)
        yield call(onDeleteUserStartAsync, payload)
    }
}

const usersSagas = [
    fork(onLoadUsers),
    fork(onCreateUser),
    fork(onDeleteUser)
];

export default function* rootSaga(){
    yield all([...usersSagas]);
}