// @flow
import { authService } from '../services';
import { AUTH } from '../constants';
import { notificationActions } from '../actions';
import type { RegisterUser, LoginUser, Dispatch, Action, UserInfo } from '../types';

type Payload = {
  user?: UserInfo,
  error?: string,
};

export type AuthAction = Action & Payload;

const register = (user: RegisterUser): Dispatch => {
  const request = (): AuthAction => {
    return { type: AUTH.REGISTER };
  };

  const success = (user: UserInfo): AuthAction => {
    return { type: AUTH.REGISTER_SUCCESS, user };
  };

  const failure = (error: string): AuthAction => {
    return { type: AUTH.REGISTER_ERROR, error };
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
    return { type: AUTH.LOGIN };
  };

  const success = (user: UserInfo): AuthAction => {
    return { type: AUTH.LOGIN_SUCCESS, user };
  };

  const failure = (error: string): AuthAction => {
    return { type: AUTH.LOGIN_ERROR, error };
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
  return { type: AUTH.LOGOUT };
};

export const authActions = {
  register,
  login,
  logout,
};
