// @flow
import { authService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
import { authConstants } from '../constants';
import { User, Dispatch } from '../types';

export type AuthAction =
  | { type: 'AUTH_REGISTER', user: User }
  | { type: 'AUTH_REGISTER_SUCCESS', user: User }
  | { type: 'AUTH_REGISTER_ERROR' }
  | { type: 'AUTH_LOGIN', user: User }
  | { type: 'AUTH_LOGIN_SUCCESS', user: User }
  | { type: 'AUTH_LOGIN_ERROR' }
  | { type: 'AUTH_LOGOUT' };

// const register = (username: string, password: string): UserAction => {
//   return { type: 'USER_REGISTER' };
// };

const login = (username: string, password: string): Dispatch => {
  const request = (user: User): AuthAction => {
    return { type: authConstants.LOGIN, user };
  };

  const success = (user: User): AuthAction => {
    return { type: authConstants.LOGIN_SUCCESS, user };
  };

  const failure = (error: string): AuthAction => {
    return { type: authConstants.LOGIN_ERROR, error };
  };

  return dispatch => {
    dispatch(request({ username }));

    authService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push('/');
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };
};

const logout = () => {
  authService.logout();
  history.push('/login');
  return { type: authConstants.LOGOUT };
};

export const authActions = {
  // register,
  login,
  logout,
};
