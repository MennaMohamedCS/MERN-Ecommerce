import React, { useContext, useEffect } from 'react';
import ProductsContext from '../contexts/ProductsContext';



const Checkout = () => {
    // 3 access data from context
    const { removeCart } = useContext(ProductsContext);
 
    useEffect(()=>{
      removeCart();
    },[removeCart])
    return (
        <div>
            Checkout
        </div>
    );
};

export default Checkout;