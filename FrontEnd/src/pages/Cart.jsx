import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import CartProducts from './../components/CartProducts';
import UserContext from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import CartApi from '../Api/CartApi';
import ButtonContinue from './../components/ButtonContinue';
import ButtonStart from './../components/ButtonStart';

const Cart = () => {
  const navigate = useNavigate();
  let total = 0;
  const { cart, products } = useContext(ProductsContext);
  const { user } = useContext(UserContext);
  cart.forEach(element => {
    const addedProduct = products.find(pro => {
      return pro._id === element.id;
    });
    total += element.addedQuantity * addedProduct.price;
  });

  const handleCheck = () => {
    if (!user) return navigate('/Signin');
    else {
      CartApi.addToCart(cart);
      return navigate('/Products/Checkout');
    }
  };

  return (
    <>
      <div className="py-12">
        <div className="max-w-md mx-auto pb-12 bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          {cart.length > 0 ? (
            <>
              <div className="w-full p-4 px-5 py-5">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>

                  {cart?.map(product => (
                    <>
                      <CartProducts key={product._id} product={product} />
                    </>
                  ))}

                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2" />
                      <button
                        className="text-md  font-bold text-orange-700 focus:text-orange-800 "
                        onClick={handleCheck}
                      >
                        Check Out
                      </button>
                    </div>
                    <div className="flex justify-center items-end">
                      <span className="text-base font-medium text-gray-400 mr-1">
                        Subtotal:
                      </span>
                      <span className="text-lg font-bold text-gray-800 ">
                        {total} $
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid justify-items-center">
                <ButtonContinue />
              </div>
            </>
          ) : (
            <div className="grid justify-items-center">
              <img
                className="m-5"
                src="https://cdn-icons-png.flaticon.com/512/4545/4545141.png"
                width="250"
                alt="sticker"
              />
              <h2 className="text-orange-700 text-xl font-medium">
                Your shopping cart looks empty
              </h2>
              <p className="py-2">What are you waiting for?</p>
              <ButtonStart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
