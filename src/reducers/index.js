import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers';
import ErrorReducers from './ErrorReducers';

export default combineReducers({
  auth: AuthReducers,
  error: ErrorReducers,
});