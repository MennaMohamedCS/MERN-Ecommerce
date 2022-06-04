import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import CartApi from '../Api/CartApi';
import { useState } from 'react';

const SavedProduct = ({ SavedItem, setWishList, WishList }) => {
  // 3 access data from context
  const { products } = useContext(ProductsContext);
  //const [removeProduct] = useState({ id:SavedItem});
  const SaveProduct = products.find(pro => {
    //  console.log(typeof(pro._id),typeof(SavedItem));
    return pro._id === SavedItem;
  });
  const handleRemoveProduct = async () => {
    console.log(SavedItem);

    await CartApi.deleteProduct(SavedItem);
    setWishList(WishList.filter(productId => productId !== SavedItem));
    console.log(WishList);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex items-center">
          <img
            alt=""
            src={SaveProduct.image}
            width={100}
            className="rounded-full "
          />
          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">{SaveProduct.title}</span>
            <span className="text-xs font-light text-gray-400">
              {SaveProduct.about}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-8 flex ">
            <button>
              <img
                className="focus:outline-none bg-gray-100 border h-8 w-12 rounded text-sm px-2 mx-2"
                src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                alt="delete"
                onClick={handleRemoveProduct}
              />
            </button>
          </div>
          <div className="pr-8 ">
            <span className="text-xs font-medium">{SaveProduct.price}$</span>
          </div>
          <div>
            <i className="fa fa-close text-xs font-medium" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedProduct;
