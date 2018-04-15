// @flow
import { authConstants } from '../constants';
import { AuthAction } from '../actions';
import { type UserInfo } from '../types';
import { hasToken } from '../helpers';

export type AuthState = {
  loading: boolean,
  loggedIn: boolean,
  error: ?string,
  user: ?UserInfo,
};

const initialState: AuthState = {
  loading: false,
  loggedIn: hasToken,
  error: null,
  user: null,
};

export const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loading: true,
        loggedIn: false,
        user: null,
        error: null,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
        error: null,
      };
    case authConstants.LOGIN_ERROR:
      return {
        loading: false,
        loggedIn: false,
        user: null,
        error: action.error,
      };
    case authConstants.LOGOUT:
      return {
        loading: false,
        loggedIn: false,
        user: null,
        error: null,
      };
    case authConstants.REGISTER:
      return {
        loading: true,
        loggedIn: false,
        user: null,
        error: null,
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
        error: null,
      };
    case authConstants.REGISTER_ERROR:
      return {
        loading: false,
        loggedIn: false,
        error: action.error,
        user: null,
      };
    default:
      return state;
  }
};
