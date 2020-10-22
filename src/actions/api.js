export const BASE_URL = 'http://localhost/t-company/public/index.php/api/v1/admin/';

export const GET_ME_URL = BASE_URL + 'auth/get'; // Get User by token.
export const LOGIN_URL = BASE_URL + 'auth/login'; // Login user to get token.
export const LOGOUT_URL = BASE_URL + 'auth/logout'; // Revoke user token and get logged out.
export const GET_ALL_CATEGORY_URL = BASE_URL + 'category'; // Revoke user token and get logged out.

export const  getConfig = (token = null) => {

    const config = {
        headers: {
           "Content-Type": "Application/json",
           "X-Requested-With": "XMLHttpRequest"
       }
    }

    if(token) 
        config.headers['Authorization'] = 'Bearer '+token;

    return config;
};