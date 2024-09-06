import React from 'react'
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const TopPage = () => {
    return (
        <>
            <Header />
            <div>TopPage</div>
            <Link to="/cart">カートへ</Link>
            <Footer />
        </>
    )
}

export default TopPage