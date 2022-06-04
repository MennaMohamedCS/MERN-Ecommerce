import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import authApi from '../Api/Auth';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    authApi.deleteToken();
    navigate('/');
  };

  return (
    <>
      <nav className="p-5 bg-orange-700 grid grid-cols-3 justify-items-center z-2">
        <Link to="/">
          <img
            width={50}
            alt="logo"
            src="https://see.fontimg.com/api/renderfont4/lgPK0/eyJyIjoiZnMiLCJoIjoxMDcsInciOjEzNzUsImZzIjo3OCwiZmdjIjoiI0U5REFGMyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Z28/orange-slices.png"
          />
        </Link>

        <div className="  ">
          <ul className="grid grid-cols-4  gap-5    ">
            {user ? (
              <Link to="NewProduct" className=" text-white ">
                Add Product
              </Link>
            ) : (
              <Link to="Signin" className=" text-white ">
                Add Product
              </Link>
            )}

            <Link to="/Products" className=" text-white ">
              Products
            </Link>
          </ul>
        </div>

        <div className="grid grid-cols-2  ">
          <Link to="/Products/Cart" className="mx-5">
            <img
              alt="cart"
              src="https://cdn-icons-png.flaticon.com/512/679/679903.png"
              className="w-9 "
            />
          </Link>
          <div className="ml-3 relative inline">
            <button
              type="button"
              className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu-button"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://source.unsplash.com/random"
                alt="userPhoto"
              />
            </button>

            <div
              className=" z-10 origin-top-right absolute right-8 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none   "
              role="menu"
              id="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
            >
              {user ? (
                <>
                  <button
                    className="z-20 block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <Link
                    to="/Products/WishList"
                    className="z-20 block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-3"
                  >
                    WishList
                  </Link>
                  <Link
                    to="/Products/History"
                    className="z-20 block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-4"
                  >
                    History
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/Signup"
                    className="z-20 block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-0"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/Signin"
                    className="z-20 block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    id="user-menu-item-1"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
