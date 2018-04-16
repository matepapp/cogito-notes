// @flow
import { noteConstants } from '../constants';
import { NoteAction } from '../actions';
import { type Note } from '../types';

export type NoteState = {
  loading: boolean,
  error: ?string,
  notes: ?Array<Note>,
};

const initialState: NoteState = {
  loading: false,
  error: null,
  notes: null,
};

export const note = (state: NoteState = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case noteConstants.LIST:
      return {
        loading: true,
        error: null,
        notes: null,
      };
    case noteConstants.LIST_SUCCES:
      return {
        loading: false,
        error: null,
        notes: action.notes,
      };
    case noteConstants.LIST_ERROR:
      return {
        loading: true,
        error: action.error,
        notes: null,
      };
    default:
      return state;
  }
};
