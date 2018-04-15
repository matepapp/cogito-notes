// @flow
import { authConstants } from '../constants';

export const hasToken: boolean = localStorage.getItem(authConstants.TOKEN_KEY) != null;

export const setToken = (token: string) => {
  localStorage.setItem(authConstants.TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(authConstants.TOKEN_KEY);
};

export const TOKEN = localStorage.getItem(authConstants.TOKEN_KEY);
