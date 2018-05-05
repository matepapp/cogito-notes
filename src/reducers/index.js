// @flow
import { combineReducers } from 'redux';
import { auth, type AuthState } from './authReducer';
import { note, type NoteState } from './noteReducer';
import { noteList, type NoteListState } from './noteListReducer';
import { notification, type NotificationState } from './notificationReducer';

export const rootReducer = combineReducers({
  auth,
  note,
  noteList,
  notification,
});

export type State = {
  auth: AuthState,
  note: NoteState,
  noteList: NoteListState,
  notification: NotificationState,
};
