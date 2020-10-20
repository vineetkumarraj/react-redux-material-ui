import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../actions/types';

const initialStore = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null,
    isLoading: false,
}

export default function(state = initialStore, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_LOADED: 
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.data
            };
        case LOGIN_SUCCESS: 
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload.data,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOGIN_FAIL: 
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false
            };
        case LOGOUT_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return {
                ...state
            };
    }
}