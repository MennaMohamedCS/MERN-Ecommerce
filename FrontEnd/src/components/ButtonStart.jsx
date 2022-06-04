import React from 'react';
import { Link } from 'react-router-dom';

const ButtonStart = () => {
  return (
    <>
      <Link
        to="/"
        className="px-5 focus:bg-slate-700  bg-orange-700 hover:bg-orange-800 text-gray-100 font-bold py-2 rounded inline-flex items-center"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/86/86553.png"
          alt="Shopping"
          className="w-9 h-7 pr-1"
        />
        <span>Start Shopping</span>
      </Link>
    </>
  );
};

export default ButtonStart;
