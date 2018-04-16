// @flow
import { noteConstants } from '../constants';
import { type Dispatch, type Note } from '../types';
import { noteService } from '../services';

export type NoteAction =
  | { type: 'NOTE_LIST' }
  | { type: 'NOTE_LIST_ERROR', error: string }
  | { type: 'NOTE_LIST_SUCCES', notes: Array<Note> };

const list = (): Dispatch => {
  const request = (): NoteAction => {
    return { type: noteConstants.LIST };
  };

  const success = (notes: Array<Note>): NoteAction => {
    return { type: noteConstants.LIST_SUCCES, notes };
  };

  const failure = (error: string): NoteAction => {
    return { type: noteConstants.LIST_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    noteService.list().then(
      notes => {
        dispatch(success(notes));
      },
      error => {
        dispatch(failure(error));
      },
    );
  };
};

export const noteActions = {
  list,
};
