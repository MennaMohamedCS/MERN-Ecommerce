import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { ProductsContextProvider } from '../contexts/ProductsContext';

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Bikes = lazy(() => import("../pages/Bikes"));
const Skateboards = lazy(() => import("../pages/Skateboards"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const WishList = lazy(() => import("../pages/WishList"));
const History = lazy(() => import("../pages/History"));
const ProductById = lazy(() => import("../pages/ProductById"));

const NotFound = lazy(() => import("../pages/NotFound"));


const ProductModule = () => {
	return (
		<ProductsContextProvider>
			<Routes>
            <Route index element={<Home />} />
			<Route path="Products" element={<Products />} />
				<Route path="Products/Bikes" element={<Bikes />} />
				<Route path="Products/Skateboards" element={<Skateboards />} />
				<Route path="Products/Checkout" element={<Checkout />} />
				<Route path="Products/Cart" element={<Cart />} />
				<Route path="Products/WishList" element={<WishList />} />
				<Route path="Products/History" element={<History/>} />
				<Route path="Products/:productId" element={<ProductById />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			</ProductsContextProvider>
	);
};

export default ProductModule;
