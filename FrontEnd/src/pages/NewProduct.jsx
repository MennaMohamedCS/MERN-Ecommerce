import React, { useCallback, useState } from 'react';
import productsApi from '../Api/ProductApi';
import { toast } from 'react-toastify';

const NewProduct = props => {
  const [data, setData] = useState({
    title: '',
    about: '',
    category: '',
    image: '',
    price: 0,
    quantity: 1,
  });

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
        await productsApi.createProduct(data);
    },
    [data]
  );

  //event Change Form
  const handleChange = useCallback(
    event => {
      const { name, value } = event.target;
      //1) set data value from form
      setData(() => ({ ...data, [name]: value }));
    },
    [data]
  );

  return (
    <form onSubmit={handleSubmit} className="p-8 grid ">
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-800 peer"
            placeholder=" "
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-700 peer-focus:dark:text-orange-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group grid xl:grid-cols-2 xl:gap-6 pt-4">
          <div class="form-check inline">
            <input
              name="category"
              value="Bike"
              onChange={handleChange}
              className=" appearance-none rounded-full h-5 w-5 border border-gray-400 checked:bg-orange-700 cursor-pointer"
              type="radio"
              id="Bike"
            />
            <label
              className=" pl-3 text-gray-800"
              htmlFor="Bike"
            >
              Bike
            </label>
          </div>
          <div class="form-check inline">
            <input
              name="category"
              value="Skateboard"
              onChange={handleChange}
              className=" appearance-none rounded-full h-5 w-5 border border-gray-400 checked:bg-orange-700 cursor-pointer"
              type="radio"
              id="Skateboard"
            />
            <label
              className="pl-3  text-gray-800"
              htmlFor="Skateboard"
            >
              Skateboard
            </label>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            min={0}
            id="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-800 peer"
            placeholder=" "
            name="price"
            value={data.price}
            onChange={handleChange}
            required=""
          />
          <label
            htmlFor="price"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-700 peer-focus:dark:text-orange-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            min={1}
            id="quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-800 peer"
            placeholder=" "
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
            required=""
          />
          <label
            htmlFor="quantity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-700 peer-focus:dark:text-orange-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Quantity
          </label>
        </div>

      </div>

      <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            id="image"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-800 peer"
            placeholder=" "
            name="image"
            value={data.image}
            onChange={handleChange}
            required
          />
          <label
            htmlFor="image"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-700 peer-focus:dark:text-orange-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            http://
          </label>
        </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          id="about"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-800 peer"
          placeholder=" "
          name="about"
          value={data.about}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="about"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-700 peer-focus:dark:text-orange-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          About
        </label>
      </div>




                 {/* Submit button */}
                 <button
                type="submit"
                className="justify-self-center my-5 w-1/3  px-7 py-3 bg-orange-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out"

              >
                Save
              </button>
    </form>
  );
};

export default NewProduct;
