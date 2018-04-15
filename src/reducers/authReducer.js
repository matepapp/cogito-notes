// @flow
import { authConstants } from '../constants';
import { AuthAction } from '../actions';
import { type UserInfo } from '../types';
import { hasToken } from '../helpers';

export type AuthState = {
  loading: boolean,
  loggedIn: boolean,
  user?: UserInfo,
};

const initialState: AuthState = { loading: false, loggedIn: hasToken };

export const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loading: true,
        loggedIn: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
      };
    case authConstants.LOGIN_ERROR:
      return { loading: false, loggedIn: false };
    case authConstants.LOGOUT:
      return { loading: false, loggedIn: false };
    case authConstants.REGISTER:
      return {
        loading: true,
        loggedIn: false,
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        user: action.user,
      };
    case authConstants.REGISTER_ERROR:
      return { loading: false, loggedIn: false };
    default:
      return state;
  }
};
