// @flow
import type { Note } from '../types';
import { TOKEN } from '../helpers';
import { network } from '.';

const URL = {
  NOTES: '/notes/',
  EDIT: '/edit',
};

const list = (): Promise<Array<Note>> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .get(URL.NOTES, config)
    .catch(error => {
      return Promise.reject(error.response.data);
    })
    .then(response => response.data.results);
};

const getNoteByID = (id: string): Promise<Note> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .get(URL.NOTES + id, config)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

const save = (note: Note): Promise<Note> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .patch(URL.NOTES + note.id, JSON.stringify(note), config)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

const edit = (note: Note): Promise<Note> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .post(URL.NOTES + note.id + URL.EDIT, note.id, config)
    .catch(error => Promise.reject(error.response.data.detail))
    .then(response => response.data);
};

export const noteService = {
  list,
  getNoteByID,
  save,
  edit,
};
