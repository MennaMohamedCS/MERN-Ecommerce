import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';

const HistoryProduct = ({ UserHistory }) => {
  // 3 access data from context
  const { products } = useContext(ProductsContext);
  const historyProduct = products.find(pro => {
    return pro._id === UserHistory.id;
  });
  return (
    <>
      <div className="flex justify-between items-center mt-6 pt-6">
        <div className="flex  items-center">
          <img
            alt=""
            src={historyProduct.image}
            width={100}
            className="rounded-full "
          />
          <div className="flex flex-col ml-3">
            <span className="md:text-md font-medium">
              {historyProduct.title}
            </span>
            <span className="md:text-md font-small ">{UserHistory.date}</span>
            <span className="text-xs font-light text-gray-400">
              {historyProduct.about}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="pr-8 flex ">
            <input
              type="text"
              className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2"
              Value={UserHistory.addedQuantity}
            />
          </div>
          <div className="pr-8 ">
            <span className="text-xs font-medium">{historyProduct.price}$</span>
          </div>
          <div>
            <i className="fa fa-close text-xs font-medium" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryProduct;
