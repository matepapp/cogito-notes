// @flow
import { authService } from '../services';
import { authConstants } from '../constants';
import { notificationActions } from '../actions';
import {
  type RegisterUser,
  type LoginUser,
  type Dispatch,
  type UserInfo,
} from '../types';

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
        dispatch(
          notificationActions.success(
            `Registration completed ${userInfo.firstName} ${userInfo.lastName}!`,
          ),
        );
      },
      error => {
        dispatch(failure(error));
        dispatch(notificationActions.error(error));
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
        dispatch(
          notificationActions.success(
            `Welcome back ${userInfo.firstName} ${userInfo.lastName}!`,
          ),
        );
      },
      error => {
        dispatch(failure(error));
        dispatch(notificationActions.error(error));
      },
    );
  };
};

const logout = (): AuthAction => {
  authService.logout();
  return { type: authConstants.LOGOUT };
};

export const authActions = {
  register,
  login,
  logout,
};
