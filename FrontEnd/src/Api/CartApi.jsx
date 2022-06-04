import http from './http';
import { toast } from 'react-toastify';

const addToCart = cart =>
  http.put('http://localhost:5000/api/users/add/', { cart }).then(()=>{
    toast.success('Done', { theme: 'colored' });
  }).catch(error => {
    toast.error(error.response.data.message);
  });


const getHistory = () => http.get('http://localhost:5000/api/users/cart').catch(error => {
  toast.error(error.response.data.message);
});

const SaveItem = id => 
  http.put('http://localhost:5000/api/users/favorite', { id }).then(()=>{
    toast.success('Saved Item', { theme: 'colored' });
  }).catch(error => {
    toast.error(error.response.data.message);
  });


const getWishList = () => http.get('http://localhost:5000/api/users/favorite').catch(error => {
  toast.error(error.response.data.message);
  });


const deleteProduct = id =>{
  console.log(id);
 http.delete('http://localhost:5000/api/users/favorite',{ id }).catch(error => {
  toast.error(error.response.data.message);
  });}


const cartApi = { addToCart, getHistory, SaveItem, getWishList, deleteProduct };
export default cartApi;
