// @flow
import { Note } from '.';

export type User = { name: string, id: number, notes?: Array<Note> };

export type UserInfo = {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
};

export type LoginUser = {
  username: string,
  password: string,
};

export type RegisterUser = {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  password1: string,
  password2: string,
};

export const userInfoFromApiResponse = (userApiResponse: Object): UserInfo => {
  const { pk, username, email, first_name, last_name } = userApiResponse;
  return {
    id: pk,
    username,
    email,
    firstName: first_name,
    lastName: last_name,
  };
};
