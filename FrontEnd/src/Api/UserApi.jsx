import http from './http';
import { toast } from 'react-toastify';


const createUser = data =>
  http
    .post('http://localhost:5000/api/users/signup', data)
    .catch(error => {
      toast.error(error.response.data.message);
    });
const loginUser = data =>
  http
    .post('http://localhost:5000/api/users/signin', data)

    .catch(error => {
      toast.error(error.response.data.message);
    });

const usersApi = { createUser, loginUser };
export default usersApi;
