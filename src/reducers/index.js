// @flow
import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  auth,
  alert,
});

export default rootReducer;
