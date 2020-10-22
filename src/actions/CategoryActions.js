import axios from 'axios';
import { BASE_URL, getConfig } from './api';
import {
    CATEGORY_LOADING,
    CATEGORY_LOADED,
    CATEGORY_FAIL,
} from './types';

export const loadCategory = (page = null) => async (dispatch, getState) => {
    
    dispatch({type: CATEGORY_LOADING});
    const config = getConfig(getState().auth.token); 
    let url = page !== null ? 'category?page='+page: 'category';
    axios.get(BASE_URL + url, config)
    .then( res => dispatch({ type: CATEGORY_LOADED, payload: res.data }) )
    .catch(err => {
        dispatch({ 
            type: CATEGORY_FAIL, payload: {
                status: err.response.status,
                error: err.response.data.message,
                data:  err.response.data.data
            } 
        });
    });
}