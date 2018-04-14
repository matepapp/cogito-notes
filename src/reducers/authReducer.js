// @flow
import { authConstants } from '../constants';
import { AuthAction } from '../actions';
import { type UserInfo } from '../types';

export type AuthState = {
  loading: boolean,
  loggedIn: boolean,
  user?: UserInfo,
};

let token: ?string = localStorage.getItem(authConstants.TOKEN_KEY);
const loggedIn: boolean = token ? true : false;
const initialState: AuthState = { loading: false, loggedIn };

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
