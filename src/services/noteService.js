// @flow
import { Note } from '../types';
import { TOKEN } from '../helpers';
import { network } from '.';

const URL = {
  LIST: '/notes/',
};

const list = (): Promise<Array<Note>> => {
  const config = {
    headers: { Authorization: `JWT ${TOKEN}` },
  };

  return network
    .get(URL.LIST, config)
    .catch(error => {
      return Promise.reject(error.response.data);
    })
    .then(response => {
      const notes: Array<Note> = response.data.results.map(note => {
        const { id, url, created, owner, is_edited, title, text } = note;
        return { id, url, created, owner, isEdited: is_edited, title, text };
      });

      return notes;
    });
};

export const noteService = {
  list,
};
