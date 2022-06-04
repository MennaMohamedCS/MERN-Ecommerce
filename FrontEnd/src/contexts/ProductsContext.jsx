import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import productsApi from '../Api/ProductApi';
import useData from '../hooks/useData';
import { toast } from 'react-toastify';
// 1 create context
const ProductsContext = createContext();

export const ProductsContextProvider = props => {
  const { children } = props;
  const { data: products, request } = useData();
  const [bikes, setBikes] = useState([]);
  const [skateboards, setSkateboards] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedProduct] = useState({
    id: '',
    addedQuantity: 0,
    date: new Date(),
  });


  useEffect(() => {
    request(productsApi.getProducts);
  }, []);

  useEffect(() => {
    setBikes(
      products?.filter(item => {
        return item.category.toLowerCase() === 'bike';
      })
    );

    setSkateboards(
      products?.filter(item => {
        return item.category.toLowerCase() === 'skateboard';
      })
    );
  }, [products]);

  const removeCart = useCallback(() => {
    setCart([]);
  }, []);

  const handleAddToCart = useCallback(
    productId => {
      let isFoundIndex = cart.findIndex(product => {
        return product.id === productId;
      });
      if (isFoundIndex > -1) {
        cart[isFoundIndex].addedQuantity++;
      } else {
        const productAddedToCart = products.find(item => {
          return item._id === productId;
        });
        addedProduct.id = productAddedToCart._id;
        addedProduct.addedQuantity = 1;
        setCart(oldCarts => [{ ...addedProduct }, ...oldCarts]);
      }
      toast.success('Added to Cart', { theme: 'colored' });
    },
    [addedProduct, cart, products]
  );


  const handleAdded = useCallback(addedProduct => {
    setCart(oldCarts =>
      oldCarts.map(productCart =>
        productCart.id === addedProduct
          ? { ...productCart, addedQuantity: productCart.addedQuantity + 1 }
          : productCart
      )
    );
  }, []);

  const handelMinus = useCallback(addedProduct => {
    setCart(oldCarts =>
      oldCarts.map(productCart =>
        productCart.id === addedProduct
          ? { ...productCart, addedQuantity: productCart.addedQuantity - 1 }
          : productCart
      )
    );
  }, []);

  
  const contextValue = useMemo(
    () => ({
      products,
      bikes,
      skateboards,
      cart,
      handleAddToCart,
      handleAdded,
      handelMinus,
      removeCart,
    }),
    [
      products,
      bikes,
      skateboards,
      cart,
      handleAddToCart,
      handleAdded,
      handelMinus,
      removeCart,
    ]
  );

  return (
    // 2 Provide context to components + put data inside context
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
