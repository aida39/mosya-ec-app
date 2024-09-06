import React from 'react'
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const CartPage = () => {
    return (
        <>
            <Header />
            <div>CartPage</div>
            <Link to="/">トップページへ</Link>
            <Footer />
        </>
    )
}

export default CartPage