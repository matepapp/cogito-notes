import { COMMON } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = COMMON.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const network = axios;
