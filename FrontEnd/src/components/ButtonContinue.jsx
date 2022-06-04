import React from 'react';
import { Link } from 'react-router-dom';

const ButtonContinue = () => {
  return (
    <>
      <Link
        to="/"
        className="focus:bg-slate-700 bg-orange-700 hover:bg-orange-800 text-gray-100 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/66/66601.png"
          alt="Shopping"
          className="w-7 h-7 pr-1"
        />
        <span>Continue Shopping</span>
      </Link>
    </>
  );
};

export default ButtonContinue;
