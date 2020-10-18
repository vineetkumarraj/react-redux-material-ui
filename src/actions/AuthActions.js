import axios from 'axios';
import { GET_ME_URL, LOGIN_URL, LOGOUT_URL, getConfig} from './api';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from './types';

import { returnErrors } from './ErrorActions';

export const loadUser = () => async (dispatch, getState) => {
    
    dispatch({type: USER_LOADING});

    const config = getConfig(getState().auth.token);

    axios.get(GET_ME_URL, config)
    .then( res => dispatch({ type: USER_LOADED, payload: res.data }) )
    .catch(err => {
        dispatch(returnErrors(err.response.status, err.response.data.message, err.response.data.data, AUTH_ERROR));
        dispatch({ type: AUTH_ERROR });
    });
}

export const loginUser = ({email, password}) => async (dispatch) => {

    const config = getConfig();

    const body = JSON.stringify({email, password});

    axios.post(LOGIN_URL, body, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.status, err.response.data.message, err.response.data.data, LOGIN_FAIL));
        dispatch({ type: LOGIN_FAIL });
    })
}


export const logoutUser = () => async (dispatch, getState) => {

    const token = getState().auth.token;

    const config = getConfig(token);

    axios.get(LOGOUT_URL, config)
    .then(res => dispatch({
        type: LOGOUT_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.status, err.response.data.message, err.response.data.data, LOGOUT_FAIL));
        dispatch({
            type: LOGOUT_FAIL
        });
    })
}