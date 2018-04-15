import { commonConstants, authConstants } from '../constants';
import { hasToken, TOKEN } from '../helpers';
import axios from 'axios';

axios.defaults.baseURL = commonConstants.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const network = axios;
