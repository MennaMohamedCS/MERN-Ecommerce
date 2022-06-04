import React, { useEffect } from 'react';
import cartApi from '../Api/CartApi';
import ButtonContinue from '../components/ButtonContinue';
import ButtonStart from '../components/ButtonStart';
import useData from '../hooks/useData';
import SavedProduct from '../components/SavedProduct';

const WishList = () => {
  const { data: WishList, setData: setWishList, request } = useData();
  useEffect(() => {
    request(cartApi.getWishList);
  }, []);
  return (
    <>
      <div className="py-12">
        <div className="max-w-md mx-auto pb-12 bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          {WishList.length > 0 ? (
            <>
              <div className="w-full p-4 px-5 py-5">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium ">Shopping Cart</h1>

                  {WishList?.map(product => (
                    <>
                      <SavedProduct
                        key={product}
                        SavedItem={product}
                        setWishList={setWishList}
                        WishList={WishList}
                      />
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
                You haven’t saved an item yet
              </h2>
              <p className="py-2">
                Found something you like? Tap on the heart shaped icon next to{' '}
                <br></br>
                the item to add it to your wishlist! All your saved items will
                appear here.
              </p>
              <ButtonStart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
