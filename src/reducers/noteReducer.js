// @flow
import { NOTE } from '../constants';
import type { NoteAction } from '../actions';
import type { Note } from '../types';

export type NoteState = {|
  +loading: boolean,
  +error?: string,
  +note?: Note,
  +isEditing?: boolean,
|};

const initialState: NoteState = {
  loading: false,
};

export const note = (state: NoteState = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case NOTE.BY_ID:
      return {
        loading: true,
      };
    case NOTE.BY_ID_SUCCESS:
      return {
        loading: false,
        note: action.note,
      };
    case NOTE.BY_ID_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    case NOTE.SAVE:
      return {
        loading: true,
      };
    case NOTE.SAVE_SUCCES:
      return {
        loading: false,
        note: action.note,
      };
    case NOTE.SAVE_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    case NOTE.EDIT:
      return {
        loading: true,
      };
    case NOTE.EDIT_SUCCES:
      return {
        loading: false,
        isEditing: action.isEditing,
      };
    case NOTE.EDIT_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
