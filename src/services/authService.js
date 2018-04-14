// @flow
import { authConstants } from '../constants';
import {
  type LoginUser,
  type RegisterUser,
  type UserInfo,
  userInfoFromApiResponse,
} from '../types';
import { network } from '.';

const URL = {
  REGISTER: '/registration/',
  LOGIN: '/login/',
  LOGOUT: '/logout/',
};

const register = (user: RegisterUser): Promise<UserInfo> => {
  return network
    .post(URL.REGISTER, user)
    .catch(error => {
      return Promise.reject(error.response.data);
    })
    .then(response => {
      return userInfoFromApiResponse(response.data.user);
    });
};

const login = (user: LoginUser): Promise<UserInfo> => {
  return network
    .post(URL.LOGIN, JSON.stringify(user))
    .catch(error => {
      return Promise.reject(error.response.data.non_field_errors);
    })
    .then(response => {
      localStorage.setItem(authConstants.TOKEN_KEY, response.data.token);
      return userInfoFromApiResponse(response.data.user);
    });
};

const logout = () => {
  localStorage.removeItem(authConstants.TOKEN_KEY);
};

export const authService = {
  register,
  login,
  logout,
};
