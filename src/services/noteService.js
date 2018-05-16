// @flow
import type { Note } from '../types';
import { authorizedNetwork } from '.';

const URL = {
  NOTES: '/notes/',
  SHARED: '/shared/',
  EDIT: '/edit',
  SHARE: '/share',
};

const list = (): Promise<Array<Note>> => {
  return authorizedNetwork()
    .get(URL.NOTES)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data.results);
};

const shared = (): Promise<Array<Note>> => {
  return authorizedNetwork()
    .get(URL.SHARED)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => console.log(response));
};

const getNoteByID = (id: string): Promise<Note> => {
  return authorizedNetwork()
    .get(URL.NOTES + id)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

const share = (note: Note): Promise<Note> => {
  return authorizedNetwork()
    .post(URL.NOTES + note.id + URL.SHARED)
    .catch(error => console.log(error))
    .then(response => console.log(response));
};

const save = (note: Note): Promise<Note> => {
  return authorizedNetwork()
    .post(URL.NOTES + note.id, JSON.stringify(note))
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

const edit = (note: Note): Promise<Note> => {
  return authorizedNetwork()
    .options(URL.NOTES + note.id + URL.EDIT)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

export const noteService = {
  list,
  shared,
  getNoteByID,
  share,
  save,
  edit,
};
