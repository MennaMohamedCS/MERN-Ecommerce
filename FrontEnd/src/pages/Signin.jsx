import React, { useState, useCallback } from 'react';
import usersApi from '../Api/UserApi';
import authApi from '../Api/Auth';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Signin = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  //event Change Form
  const handleChange = useCallback(
    event => {
      const { name, value } = event.target;
      //1) set data value from form
      setData(() => ({ ...data, [name]: value }));
    },
    [data]
  );

  //event Submit Form
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      const { data: token } = await usersApi.loginUser(data);
      authApi.setToken(token);
      window.location = '/';
    },
    [data]
  );

  return (
    <>
      <section className="h-96">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="hidden lg:inline md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              alt="photologin"
              src="https://images.unsplash.com/photo-1589542425426-2460d8243b58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              className="w-full h-screen"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            class="md:w-8/12 sm:pt-20 lg:w-5/12 lg:ml-20"
          >
            <Input
              name="email"
              type="email"
              value={data.email}
              handleChange={handleChange}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              value={data.password}
              handleChange={handleChange}
              placeholder="Password"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-orange-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Sign in
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
            <p className="text-sm text-center text-gray-400">
              Don't have an account yet?
              <Link
                to=" Signup"
                className="font-semibold text-orange-700 focus:text-orange-800 focus:outline-none focus:underline"
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signin;
