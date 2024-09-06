import React from 'react'
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">
                    <img src="./images/logo.svg" alt="logo" className="app-logo" />
                </Link>
                <h1 className="app-title">mosya Inc</h1>
            </div>
            <div className="header-right">
                <Link to="/cart">
                    <img src="./images/cart.svg" alt="" className="header-cart" />
                </Link>
                <div className="cart-count">{cart?.totalCount || 0}</div>
            </div>
        </div>
    )
}

export default Header