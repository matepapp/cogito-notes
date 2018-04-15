// @flow
import { Note } from '../types';
import { TOKEN } from '../helpers';
import { network } from '.';

const URL = {
  LIST: '/notes/',
};

const config = {
  headers: { Authorization: `JWT ${TOKEN}` },
};

const list = (): Promise<Note> => {
  return network
    .get(URL.LIST, config)
    .catch(error => {
      console.log(error);
      return Promise.reject(error.response.data);
    })
    .then(response => {
      console.log(response);
    });
};

export const noteService = {
  list,
};
