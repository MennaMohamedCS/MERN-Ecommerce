import React, { useContext } from 'react';
import ProductsContext from '../contexts/ProductsContext';
import Product from '../components/Product';

const Skateboards = () => {
  // 3 access data from context
  const { skateboards } = useContext(ProductsContext);
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:pl-20  lg:pl-20 m-8  gap-5">
        {skateboards?.map(skateboard => (
          <>
            <Product key={skateboards.id} product={skateboard} />
          </>
        ))}
      </div>
    </>
  );
};

export default Skateboards;
