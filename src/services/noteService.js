// @flow
import { type Note, noteFromApiResponse } from '../types';
import { TOKEN } from '../helpers';
import { network } from '.';

const URL = {
  NOTES: '/notes/',
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
    .then(response => {
      const notes: Array<Note> = response.data.results.map(result =>
        noteFromApiResponse(result),
      );

      return notes;
    });
};

const getNoteByID = (id: string): Promise<Note> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .get(URL.NOTES + id, config)
    .catch(error => {
      return Promise.reject(error.response.data);
    })
    .then(response => noteFromApiResponse(response.data));
};

export const noteService = {
  list,
  getNoteByID,
};
