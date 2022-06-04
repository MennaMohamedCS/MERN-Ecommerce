import React, { useEffect, useState } from 'react';



import { ToastContainer } from 'react-toastify';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import authApi from '../Api/Auth';
import UserContext from '../contexts/UserContext';

import { lazy ,Suspense } from "react"; //1
import {BrowserRouter , Routes , Route} from 'react-router-dom';



//2
const Signup = lazy(() => import("../pages/Signup"));
const Signin = lazy(() => import("../pages/Signin"));
const NewProduct = lazy(() => import("../pages/NewProduct"));

const NotFound = lazy(() => import("../pages/NotFound"));
const Navbar = lazy(() => import("../components/Navbar"));
const ProductModule = lazy(() => import("../modules/ProductModule"));



function App() {

  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    setUser(authApi.getUser() || null);
  }, []);

  return (
    <Suspense fallback={<div> Loaaaaaading </div>}>
    <BrowserRouter>
    
      <UserContext.Provider value={{ user, setUser, userLoading, setUserLoading }}>
        <ToastContainer/>
        <Navbar/>
            <Routes>
              
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/NewProduct" element={<NewProduct />} />
              <Route path="/*" element={<ProductModule />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

      </UserContext.Provider>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;
