// @flow
import { combineReducers } from 'redux';
import { auth, type AuthState } from './authReducer';
import { note, type NoteState } from './noteReducer';

export const rootReducer = combineReducers({
  auth,
  note,
});

export type State = {
  auth: AuthState,
  note: NoteState,
};
