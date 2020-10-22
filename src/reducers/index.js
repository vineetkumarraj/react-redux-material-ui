import { combineReducers } from 'redux'
import AuthReducers from './AuthReducers';
import ErrorReducers from './ErrorReducers';
import CategoryReducers from './CategoryReducers';

export default combineReducers({
  auth: AuthReducers,
  error: ErrorReducers,
  category: CategoryReducers,
});