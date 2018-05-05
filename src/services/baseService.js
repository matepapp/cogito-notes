import { COMMON } from '../constants';
import { TOKEN } from '../helpers';
import axios from 'axios';

export const network = () =>
  axios.create({
    baseURL: COMMON.BASE_URL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
  });

export const authorizedNetwork = () =>
  axios.create({
    baseURL: COMMON.BASE_URL,
    timeout: 1000,
    headers: {
      Authorization: `JWT ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
