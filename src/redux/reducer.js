import * as types from "./actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_USER_START:
        case types.LOAD_USERS_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case types.CREATE_USER_ERROR:
        case types.LOAD_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default usersReducer;