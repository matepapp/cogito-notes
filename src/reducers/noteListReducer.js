// @flow
import { NOTE } from '../constants';
import type { NoteListAction } from '../actions';
import type { Note } from '../types';

export type NoteListState = {|
  +loading: boolean,
  +error?: string,
  +notes?: Array<Note>,
|};

const initialState: NoteListState = {
  loading: false,
};

export const noteList = (
  state: NoteListState = initialState,
  action: NoteListAction,
): NoteListState => {
  switch (action.type) {
    case NOTE.LIST:
      return {
        loading: true,
      };
    case NOTE.LIST_SUCCES:
      return {
        loading: false,
        notes: action.notes,
      };
    case NOTE.LIST_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    case NOTE.SHARED_LIST:
      return {
        loading: true,
      };
    case NOTE.SHARED_LIST_SUCCES:
      return {
        loading: false,
        notes: action.notes,
      };
    case NOTE.SHARED_LIST_ERROR:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
