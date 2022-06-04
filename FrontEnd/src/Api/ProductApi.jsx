import http from './http';
import { toast } from 'react-toastify';
const createProduct = data =>
  http.post('http://localhost:5000/api/products/', data).then(()=>{
    toast.success('Done', { theme: 'colored' });
  }).catch(error => {
    toast.error(error.response.data.message);
  });


const getProducts = () =>
  http.get('http://localhost:5000/api/products/').catch(error => {
    toast.error(error.response.data.message);
  });


const getProductById = id =>
  http.get(`http://localhost:5000/api/products/${id}`).catch(error => {
    toast.error(error.response.data.message);
  });

const productsApi = { createProduct, getProducts, getProductById };
export default productsApi;
