// @flow
import { combineReducers } from 'redux';
import { auth, type AuthState } from './authReducer';

export const rootReducer = combineReducers({
  auth,
});

export type State = {
  auth: AuthState,
};
