// @flow
import { NOTE } from '../constants';
import type { Dispatch, Note, Action, ThunkAction } from '../types';
import { notificationActions } from '../actions';
import { noteService } from '../services';

type Payload = {
  notes?: Array<Note>,
  error?: string,
};

export type NoteListAction = Action & Payload;

const list = (): ThunkAction => {
  const request = (): NoteListAction => {
    return { type: NOTE.LIST };
  };

  const success = (notes: Array<Note>): NoteListAction => {
    return { type: NOTE.LIST_SUCCES, notes };
  };

  const failure = (error: string): NoteListAction => {
    return { type: NOTE.LIST_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    noteService.list().then(
      (notes: Array<Note>) => dispatch(success(notes)),
      (error: string) => {
        dispatch(notificationActions.error(error));
        dispatch(failure(error));
      },
    );
  };
};

const shared = (): ThunkAction => {
  const request = (): NoteListAction => {
    return { type: NOTE.SHARED_LIST };
  };

  const success = (notes: Array<Note>): NoteListAction => {
    return { type: NOTE.SHARED_LIST_SUCCES, notes };
  };

  const failure = (error: string): NoteListAction => {
    return { type: NOTE.SHARED_LIST_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    noteService.shared().then(
      (notes: Array<Note>) => dispatch(success(notes)),
      (error: string) => {
        dispatch(notificationActions.error(error));
        dispatch(failure(error));
      },
    );
  };
};

export const noteListActions = {
  list,
  shared,
};
