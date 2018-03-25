// @flow
import { authConstants } from '../constants';
import { User } from '../types';
import axios from 'axios';

const URL = {
  REGISTER: '/register/',
  LOGIN: '/login/',
  LOGOUT: '/logout/',
};

const register = (username: string, password: string) => {};

const login = (username: string, password: string): Promise<User> => {
  return axios
    .post(URL.LOGIN, JSON.stringify({ username, password }))
    .catch(error => {
      return Promise.reject(error.response.data);
    })
    .then(response => {
      // TODO: save token to localStorage
      localStorage.setItem(authConstants.TOKEN_KEY, response.data.token);

      // TODO: parse response data to User object
      // response.data.results
      const user: User = { username: 'Test' };

      return user;
    });
};

const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem(authConstants.TOKEN_KEY);
  // TODO: Call API for logout
};

const mockLogin = (username: string, password: string): Promise<User> => {
  const user: User = { username: 'Test' };
  localStorage.setItem(authConstants.TOKEN_KEY, user.username);
  return Promise.resolve(user);
};

export const authService = {
  register,
  login,
  logout,
  mockLogin,
};
