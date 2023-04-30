import React from 'react';
import { useRoutes } from 'react-router-dom';
import ProductProvider from '../contexts/productContext';
import { router } from '../router';
import Header from './Header/Header';
const Home = () => {
    const routes =useRoutes(router);
    return (
        <>
            <ProductProvider>
            <Header/>
            {routes}
            </ProductProvider>
        </>
    );
}

export default Home;
