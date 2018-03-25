// @flow
import { authConstants } from '../constants';
import { AuthAction } from '../actions';
import { User } from '../types';

export type AuthState = {
  loggedIn: boolean,
  user?: User,
};

let userString: ?string = localStorage.getItem(authConstants.TOKEN_KEY);
let user: ?User = userString ? JSON.parse(userString) : null;
const initialState: AuthState = user ? { loggedIn: true, user } : { loggedIn: false };

export const auth = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loggedIn: true,
        user: action.user,
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
    default:
      return state;
  }
};
