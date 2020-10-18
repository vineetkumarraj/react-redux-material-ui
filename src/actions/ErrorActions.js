import { GET_ERRORS, CLEAR_ERRORS } from './types';

export const returnErrors = (status, message, data = null, id = null) => {
    return {
        type: GET_ERRORS,
        payload: {status, message, data, id}
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};