import { commonConstants, authConstants } from '../constants';
import axios from 'axios';

axios.defaults.baseURL = commonConstants.BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem(authConstants.TOKEN_KEY);
