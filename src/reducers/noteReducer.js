// @flow
import { noteConstants } from '../constants';
import { NoteAction } from '../actions';
import { type Note } from '../types';

export type NoteState = {
  loading: boolean,
  error: ?string,
  notes: ?Array<Note>,
  note: ?Note,
};

const initialState: NoteState = {
  loading: false,
  error: null,
  notes: null,
  note: null,
};

export const note = (state: NoteState = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case noteConstants.LIST:
      return {
        loading: true,
        error: null,
        notes: null,
        note: null,
      };
    case noteConstants.LIST_SUCCES:
      return {
        loading: false,
        error: null,
        notes: action.notes,
        note: null,
      };
    case noteConstants.LIST_ERROR:
      return {
        loading: false,
        error: action.error,
        notes: null,
        note: null,
      };
    case noteConstants.BY_ID:
      return {
        loading: true,
        error: null,
        notes: null,
        note: null,
      };
    case noteConstants.BY_ID_SUCCESS:
      return {
        loading: false,
        error: null,
        notes: null,
        note: action.note,
      };
    case noteConstants.BY_ID_ERROR:
      return {
        loading: false,
        error: action.error,
        notes: null,
        note: null,
      };
    default:
      return state;
  }
};
