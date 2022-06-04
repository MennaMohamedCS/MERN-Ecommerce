import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import Product from '../components/Product';

const Products = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="container">
      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:pl-20  lg:pl-20 m-8  gap-5">
          {products?.map(product => (
            <>
              <Product key={product._id} product={product} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
