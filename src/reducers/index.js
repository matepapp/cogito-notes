// @flow
import { combineReducers } from 'redux';
import { auth, type AuthState } from './authReducer';
import { note, type NoteState } from './noteReducer';
import { notification, type NotificationState } from './notificationReducer';

export const rootReducer = combineReducers({
  auth,
  note,
  notification,
});

export type State = {
  auth: AuthState,
  note: NoteState,
  notification: NotificationState,
};
