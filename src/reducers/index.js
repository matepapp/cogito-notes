// @flow
import { combineReducers } from 'redux';
import { auth, type AuthState } from './authReducer';
import { alert, type AlertState } from './alertReducer';

export const rootReducer = combineReducers({
  auth,
  alert,
});

export type State = {
  auth: AuthState,
  alert: AlertState,
};
