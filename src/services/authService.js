// @flow
import { authConstants, commonConstants } from '../constants';
import { User } from '../types';
import axios from 'axios';

const URL = {
  REGISTER: '/register/',
  LOGIN: '/login/',
  LOGOUT: '/logout/',
};

const network = axios.create({
  baseURL: commonConstants.BASE_URL,
});

const register = (user: User): Promise<User> => {
  const { username, password, email } = user;
  return network.post(URL.REGISTER, { username, password }).catch(error => {});
};

const login = (username: string, password: string): Promise<User> => {
  return network
    .post(URL.LOGIN, { username, password })
    .catch(error => {
      console.log(error);
      return Promise.reject(error.response.data);
    })
    .then(response => {
      localStorage.setItem(authConstants.TOKEN_KEY, response.data.token);
      const { username, email, first_name, last_name } = response.data.user;
      const user: User = { username, email, firstName: first_name, lastName: last_name };

      return user;
    });
};

const logout = () => {
  localStorage.removeItem(authConstants.TOKEN_KEY);
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
