import React from 'react'

const Header = () => {
    return (
        <div className = "header">
            <div className="header-left">
                <img src="./images/logo.svg" alt="logo" className="app-logo" />
                <h1 className="app-title">mosya Inc</h1>
            </div>
            <div className="header-right">
                <img src="./images/cart.svg" alt="" className="header-cart" />
                <div className="cart-count">3</div>
            </div>
        </div>
    )
}

export default Header