// @flow
import { authService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
import { authConstants } from '../constants';
import { RegisterUser, LoginUser, Dispatch, UserInfo } from '../types';

export type AuthAction =
  | { type: 'AUTH_REGISTER' }
  | { type: 'AUTH_REGISTER_SUCCESS', user: UserInfo }
  | { type: 'AUTH_REGISTER_ERROR', error: string }
  | { type: 'AUTH_LOGIN' }
  | { type: 'AUTH_LOGIN_SUCCESS', user: UserInfo }
  | { type: 'AUTH_LOGIN_ERROR', error: string }
  | { type: 'AUTH_LOGOUT' };

const register = (user: RegisterUser): Dispatch => {
  const request = (): AuthAction => {
    return { type: authConstants.REGISTER };
  };

  const success = (user: UserInfo): AuthAction => {
    return { type: authConstants.REGISTER_SUCCESS, user };
  };

  const failure = (error: string): AuthAction => {
    return { type: authConstants.REGISTER_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    authService.register(user).then(
      userInfo => {
        dispatch(success(userInfo));
        history.push('/');
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      },
    );
  };
};

const login = (user: LoginUser): Dispatch => {
  const request = (): AuthAction => {
    return { type: authConstants.LOGIN };
  };

  const success = (user: UserInfo): AuthAction => {
    return { type: authConstants.LOGIN_SUCCESS, user };
  };

  const failure = (error: string): AuthAction => {
    return { type: authConstants.LOGIN_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    authService.login(user).then(
      userInfo => {
        dispatch(success(userInfo));
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
  register,
  login,
  logout,
};
