import React, { useCallback, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../contexts/UserContext';
import ProductsContext from '../contexts/ProductsContext';
import cartApi from './../Api/CartApi';

const Product = ({ product }) => {
  // 3 access data from context
  const { handleAddToCart } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    handleAddToCart(product._id);
  }, [handleAddToCart, product._id]);

  const handleClickSave = useCallback(() => {
    if (!user) return navigate('/Signin');
    else {
      cartApi.SaveItem(product._id);
    }
  }, [navigate, product._id, user]);

  return (
    <>
      <div className="max-w-sm px-5 pb-7 grid justify-items-end relative text-gray-700 rounded-lg border border-gray-200 shadow-md dark:bg-gray-100 dark:border-yellow-500 ">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4677/4677567.png"
          alt="plus"
          width={40}
          onClick={handleClick}
          className="cursor-pointer absolute top-10 right-6"
        />

        <img
          src="https://cdn-icons.flaticon.com/png/512/210/premium/210545.png?token=exp=1654305602~hmac=23957df8148df6102ffadc2bf9c88f11"
          alt="saveItem"
          width={30}
          onClick={handleClickSave}
          className="cursor-pointer absolute top-11 right-16  "
        />

        <Link to={`/Products/${product._id}`}>
          <img
            src={product.image}
            className="rounded-t-lg"
            alt="productImage"
          />

          <p className="text-gray-700 pt-4">
            {' '}
            <b>Name: </b> {product.title}
          </p>
          <p className="text-gray-700 pt-4">
            <b>About: </b> {product.about}
          </p>
          <p className="text-gray-700 pt-4">
            <b>Price: </b> {product.price}
          </p>
        </Link>
      </div>
    </>
  );
};

export default Product;
