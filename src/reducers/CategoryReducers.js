import { 
        CATEGORY_LOADING,
        CATEGORY_LOADED,
        CATEGORY_FAIL,
        CREATE_CATEGORY,
        UPDATE_CATEGORY,
        DELETE_CATEGORY
    } from '../actions/types';

export const initialState = {
    status: null,
    message: null,
    apiData: null,
    isLoading: false,
    error: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case CATEGORY_LOADED:
            return {
                ...state,
                message: action.payload.message,
                apiData: action.payload.data,
                isLoading: false,
            };
        case CATEGORY_FAIL:
            return {
                ...state,
                status: action.payload.status,
                apiData: null,
                isLoading: false,
                error: action.payload.error
            };
        case CREATE_CATEGORY: 
            return {
                status: null,
                message: null,
                apiData: null,
                id: null
            }
        case UPDATE_CATEGORY: 
            return {
                status: null,
                message: null,
                apiData: null,
                id: null
            }
        case DELETE_CATEGORY: 
            return {
                status: null,
                message: null,
                data: null,
                id: null
            }
        default:
            return {
                ...state
            }
    }
}