// @flow
import { Note } from '.';

export type User = { name: string, id: number, notes?: Array<Note> };

export type UserInfo = {
  ok: number,
  email: string,
  first_name: string,
  last_name: string,
};

export type LoginUser = {
  email: string,
  password: string,
};

export type RegisterUser = {
  first_name: string,
  last_name: string,
  email: string,
  password1: string,
  password2: string,
};
