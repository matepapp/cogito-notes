// @flow
import {
  type LoginUser,
  type RegisterUser,
  type UserInfo,
  userInfoFromApiResponse,
} from '../types';
import { setToken, removeToken } from '../helpers';
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
      setToken(response.data.token);
      return userInfoFromApiResponse(response.data.user);
    });
};

const logout = () => {
  removeToken();
};

export const authService = {
  register,
  login,
  logout,
};
