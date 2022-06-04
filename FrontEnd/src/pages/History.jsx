import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cartApi from '../Api/CartApi';
import ButtonContinue from '../components/ButtonContinue';
import ButtonStart from '../components/ButtonStart';
import HistoryProduct from '../components/HistoryProduct';
import useData from '../hooks/useData';

const History = () => {
  const { data: history, request } = useData();
  useEffect(() => {
    request(cartApi.getHistory);
  }, []);

  return (
    <>
      <div className="py-12">
        <div className="max-w-md mx-auto pb-12 bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          {history.length > 0 ? (
            <>
              <div className="w-full p-4 px-5 py-5">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>

                  {history?.map(product => (
                    <>
                      <HistoryProduct key={product._id} UserHistory={product} />
                    </>
                  ))}
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
                src="https://cdn-icons-png.flaticon.com/512/7152/7152364.png"
                width="250"
                alt="sticker"
              />
              <h2 className="text-orange-700 text-xl font-medium">
                You have no previous orders
              </h2>
              <p className="py-2">
                We have many of items available. Start ordering today
              </p>
              <ButtonStart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
