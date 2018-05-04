// @flow
import { authService } from '../services';
import { AUTH } from '../constants';
import { notificationActions } from '../actions';
import type {
  RegisterUser,
  LoginUser,
  ThunkAction,
  Dispatch,
  Action,
  UserInfo,
} from '../types';

type Payload = {
  user?: UserInfo,
  error?: string,
};

export type AuthAction = Action & Payload;

const register = (user: RegisterUser): ThunkAction => {
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
      (userInfo: UserInfo) => {
        dispatch(success(userInfo));
        dispatch(
          notificationActions.success(
            `Registration completed ${userInfo.first_name} ${userInfo.last_name}!`,
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

const login = (user: LoginUser): ThunkAction => {
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

    return authService.login(user).then(
      (userInfo: UserInfo) => {
        dispatch(success(userInfo));
        dispatch(
          notificationActions.success(
            `Welcome back ${userInfo.first_name} ${userInfo.last_name}!`,
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
