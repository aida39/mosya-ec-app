import React from 'react'
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const CartPage = ({ cart }) => {
    return (
        <div className="container">
            <Header cart={cart} />
            <div className="cart-wrapper">
                <div className="cart-inner">
                    <h2 className="cart-title">カート内の商品</h2>
                    {cart && cart.items && cart.items.length > 0 ? (
                        cart.items.map(item => (
                            <div key={item.id} className="cart-product">
                                <div className="product">
                                    <img src={item.image} alt={item.name} className="cart-product-img" />
                                    <span className="cart-product-name">{item.name}</span>
                                    <span className="cart-product-price">¥{item.price}</span>
                                    <span className="cart-product-count">数量: {item.count}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>カートは空です。</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage