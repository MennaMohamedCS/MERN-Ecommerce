import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';

const CartProducts = ({ product }) => {
  // 3 access data from context
  const { products, handleAdded, handelMinus } = useContext(ProductsContext);
  const addedProduct = products.find(pro => {
    return pro._id === product.id;
  });
  const handleClickAdd = useCallback(() => {
    if (addedProduct.quantity > product.addedQuantity) handleAdded(product.id);
  }, [addedProduct.quantity, handleAdded, product.addedQuantity, product.id]);

  const handelClickMinus = useCallback(() => {
    if (product.addedQuantity > 1) handelMinus(product.id);
  }, [handelMinus, product.addedQuantity, product.id]);
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex  items-center">
          <img
            alt=""
            src={addedProduct.image}
            width={100}
            className="rounded-full "
          />
          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">{addedProduct.title}</span>
            <span className="text-xs font-light text-gray-400">
              {addedProduct.about}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-8 flex ">
            <span
              className="font-semibold cursor-pointer"
              onClick={handelClickMinus}
            >
              -
            </span>
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              Value={product.addedQuantity}
            />
            <span
              className="font-semibold cursor-pointer"
              onClick={handleClickAdd}
            >
              +
            </span>
          </div>
          <div className="pr-8 ">
            <span className="text-xs font-medium">{addedProduct.price}$</span>
          </div>
          <div>
            <i className="fa fa-close text-xs font-medium" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
