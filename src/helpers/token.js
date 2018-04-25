// @flow
import { AUTH } from '../constants';

export const hasToken: boolean = localStorage.getItem(AUTH.TOKEN_KEY) != null;

export const setToken = (token: string) => localStorage.setItem(AUTH.TOKEN_KEY, token);

export const removeToken = () => localStorage.removeItem(AUTH.TOKEN_KEY);

export const TOKEN: ?string = localStorage.getItem(AUTH.TOKEN_KEY);
