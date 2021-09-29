import * as types from "./actionTypes";

export const loadUsersStart = () => ({
    type: types.LOAD_USERS_START
})

export const loadUsersSuccess = (users) => {
    return {
    type: types.LOAD_USERS_SUCCESS,
    payload: users
}}

export const loadUsersError = (error) => ({
    type: types.LOAD_USERS_ERROR,
    payload: error
})

//create user
export const createUserStart = (user) => ({
    type: types.CREATE_USER_START,
    payload: user
})

export const createUserSuccess = () => {
    return {
    type: types.CREATE_USER_SUCCESS
}}

export const createUserError = (error) => ({
    type: types.CREATE_USER_ERROR,
    payload: error
})
