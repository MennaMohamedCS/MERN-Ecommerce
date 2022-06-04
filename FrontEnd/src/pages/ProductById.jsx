import React, { useCallback, useContext, useEffect } from 'react';
import productsApi from '../Api/ProductApi';
import { ToastContainer, toast } from 'react-toastify';
import ProductsContext from '../contexts/ProductsContext';
import useData from '../hooks/useData';
import CartApi from '../Api/CartApi';
import { useParams } from 'react-router-dom';
const ProductById = () => {
  //console.log(useParams())
  const { productId } = useParams();
  const { data: product, loading, error, request: productRequest } = useData();

  const { handleAddToCart } = useContext(ProductsContext);

  useEffect(() => {
    productRequest(productsApi.getProductById, productId);
  }, [productId, productRequest]);
  const handleClick = useCallback(() => {
    handleAddToCart(product._id);
  }, [handleAddToCart, product._id]);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>{error}</h1>;
  return (
    <div>

      <section className="h-screen">
        <div className="container p-6  h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img src={product.image} className="w-96" alt="productImage" />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20 text-2xl">
              <p className="text-gray-700 pt-10">
                <b>Name: </b> {product.title}
              </p>
              <p className="text-gray-700 pt-12">
                <b>About: </b> {product.about}
              </p>
              <p className="text-gray-700 pt-12 pb-24">
                <b>Price: </b> {product.price}
              </p>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-orange-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-800 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-lg transition duration-150 ease-in-out w-full"
                onClick={handleClick}
              >
                Add to Cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductById;
