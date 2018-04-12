// @flow
import { authConstants } from '../constants';
import { AuthAction } from '../actions';
import { UserInfo } from '../types';

export type AuthState = {
  loggedIn: boolean,
  user?: UserInfo,
};

let token: ?string = localStorage.getItem(authConstants.TOKEN_KEY);
const initialState: AuthState = token ? { loggedIn: true } : { loggedIn: false };

export const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loggedIn: false,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case authConstants.LOGIN_ERROR:
      return { loggedIn: false };
    case authConstants.LOGOUT:
      return { loggedIn: false };
    case authConstants.REGISTER:
      return {
        loggedIn: false,
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case authConstants.REGISTER_ERROR:
      return { loggedIn: false };
    default:
      return state;
  }
};
