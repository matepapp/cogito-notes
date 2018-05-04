// @flow
import { NOTE } from '../constants';
import type { NoteAction } from '../actions';
import type { Note } from '../types';

export type NoteState = {
  +loading: boolean,
  +error: ?string,
  +notes: ?Array<Note>,
  +note: ?Note,
};

const initialState: NoteState = {
  loading: false,
  error: null,
  notes: null,
  note: null,
};

export const note = (state: NoteState = initialState, action: NoteAction): NoteState => {
  switch (action.type) {
    case NOTE.LIST:
      return {
        loading: true,
        error: null,
        notes: null,
        note: null,
      };
    case NOTE.LIST_SUCCES:
      return {
        loading: false,
        error: null,
        notes: action.notes,
        note: null,
      };
    case NOTE.LIST_ERROR:
      return {
        loading: false,
        error: action.error,
        notes: null,
        note: null,
      };
    case NOTE.BY_ID:
      return {
        loading: true,
        error: null,
        notes: null,
        note: null,
      };
    case NOTE.BY_ID_SUCCESS:
      return {
        loading: false,
        error: null,
        notes: null,
        note: action.note,
      };
    case NOTE.BY_ID_ERROR:
      return {
        loading: false,
        error: action.error,
        notes: null,
        note: null,
      };
    case NOTE.SAVE:
      return {
        loading: true,
        error: null,
        notes: null,
        note: null,
      };
    case NOTE.SAVE_SUCCES:
      return {
        loading: false,
        error: null,
        notes: null,
        note: action.note,
      };
    case NOTE.SAVE_ERROR:
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
