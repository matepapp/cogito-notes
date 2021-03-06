// @flow
import type { LoginUser, RegisterUser, UserInfo } from '../types';
import { setToken, removeToken } from '../helpers';
import { network } from '.';

const URL = {
  REGISTER: '/registration/',
  LOGIN: '/login/',
};

const register = (user: RegisterUser): Promise<UserInfo> => {
  return network()
    .post(URL.REGISTER, user)
    .catch(error => Promise.reject(error.response.data))
    .then(response => response.data.user);
};

const login = (user: LoginUser): Promise<UserInfo> => {
  return network()
    .post(URL.LOGIN, JSON.stringify(user))
    .catch(error => Promise.reject(error.message))
    .then(response => {
      setToken(response.data.token);
      return response.data.user;
    });
};

const logout = () => removeToken();

export const authService = {
  register,
  login,
  logout,
};
