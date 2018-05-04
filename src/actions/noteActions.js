// @flow
import { NOTE } from '../constants';
import type { Dispatch, Note, Action, ThunkAction } from '../types';
import { notificationActions } from '../actions';
import { noteService } from '../services';

type Payload = {
  note?: Note,
  error?: string,
};

export type NoteAction = Action & Payload;

const byID = (id: string): ThunkAction => {
  const request = (): NoteAction => {
    return { type: NOTE.BY_ID };
  };

  const success = (note: Note): NoteAction => {
    return { type: NOTE.BY_ID_SUCCESS, note };
  };

  const failure = (error: string): NoteAction => {
    return { type: NOTE.BY_ID_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    noteService.getNoteByID(id).then(
      (note: Note) => dispatch(success(note)),
      (error: string) => {
        dispatch(failure(error));
        dispatch(notificationActions.error(error));
      },
    );
  };
};

const save = (note: Note): ThunkAction => {
  const request = (): NoteAction => {
    return { type: NOTE.SAVE };
  };

  const success = (note: Note): NoteAction => {
    return { type: NOTE.SAVE_SUCCES, note };
  };

  const failure = (error: string): NoteAction => {
    return { type: NOTE.SAVE_ERROR, error };
  };

  return (dispatch: Dispatch) => {
    dispatch(request());

    noteService.save(note).then(
      (note: Note) => dispatch(success(note)),
      (error: string) => {
        dispatch(failure(error));
        dispatch(notificationActions.error(error));
      },
    );
  };
};

export const noteActions = {
  byID,
  save,
};
