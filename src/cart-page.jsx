import React from 'react'
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const CartPage = () => {
    return (
        <>
            <Header cart={cart} />
            <div>CartPage</div>
            <Footer />
        </>
    )
}

export default CartPage