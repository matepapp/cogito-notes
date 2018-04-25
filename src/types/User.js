// @flow
import { Note } from '.';

export type User = { name: string, id: number, notes?: Array<Note> };

export type UserInfo = {
  id: number,
  email: string,
  firstName: string,
  lastName: string,
};

export type LoginUser = {
  email: string,
  password: string,
};

export type RegisterUser = {
  firstName: string,
  lastName: string,
  email: string,
  password1: string,
  password2: string,
};

export const userInfoFromApiResponse = (apiResponse: Object): UserInfo => {
  const { pk, email, first_name, last_name } = apiResponse;
  return { id: pk, email, firstName: first_name, lastName: last_name };
};
