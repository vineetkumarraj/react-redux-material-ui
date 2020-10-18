import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

export const initialState = {
    status: null,
    message: null,
    data: null,
    id: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                status: action.payload.status,
                message: action.payload.message,
                data: action.payload.data,
                id: action.payload.id
            };
        case CLEAR_ERRORS: 
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