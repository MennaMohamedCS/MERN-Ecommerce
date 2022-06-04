import axios from 'axios';
import authApi from './Auth';

axios.defaults.headers.common['auth-token'] = authApi.getToken() || null;
const http = axios;

export default http;