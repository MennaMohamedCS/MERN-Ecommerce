import React, { useState, useCallback } from 'react';
import usersApi from '../Api/UserApi';
import authApi from '../Api/Auth';
import Input from '../components/Input';
const Signup = props => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    street: '',
    city: '',
    phone: '',
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

      const { data: token } = await usersApi.createUser(data);
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
              src="https://images.unsplash.com/photo-1626947926675-9ac09f3e26d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
              className="w-full h-screen"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            class="pt-16 lg:pt-0 md:w-8/12 lg:w-5/12 lg:ml-20"
          >
            <Input
              name="name"
              type="text"
              value={data.name}
              handleChange={handleChange}
              placeholder="Username"
            />
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
            <Input
              name="street"
              type="street"
              value={data.street}
              handleChange={handleChange}
              placeholder="Street"
            />
            <Input
              name="city"
              type="city"
              value={data.city}
              handleChange={handleChange}
              placeholder="City"
            />
            <Input
              name="phone"
              type="phone"
              value={data.phone}
              handleChange={handleChange}
              placeholder="Phone"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="inline-block px-7 py-3 bg-orange-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
