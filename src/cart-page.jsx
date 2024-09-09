import React from 'react'
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';

const CartPage = ({ cart, setCart }) => {
    const handleCountChange = (id, newCount) => {
        setCart(prevCart => {
            const updatedItems = prevCart.items.map(item =>
                item.id === id ? { ...item, count: Math.max(0, parseInt(newCount)) } : item
            );

            const totalCount = updatedItems.reduce((sum, item) => sum + item.count, 0);

            return {
                ...prevCart,
                items: updatedItems,
                totalCount: totalCount
            };
        });
    };

    return (
        <div className="container">
            <Header cart={cart} />
            <div className="cart-wrapper">
                <div className="cart-inner">
                    <h2 className="cart-title">カート内の商品</h2>
                    {cart && cart.items && cart.items.length > 0 ? (
                        <>
                            {cart.items.map(item => (
                                <div key={item.id} className="cart-product">
                                    <div className="cart-product-info">
                                        <img src={item.image} alt={item.name} className="cart-product-img" />
                                        <span className="cart-product-name">{item.name}</span>
                                    </div>
                                    <div className="cart-price-info">
                                        <span className="cart-product-price">¥{item.price}</span>
                                        <input
                                            type="number"
                                            className="cart-product-count"
                                            value={item.count}
                                            onChange={(e) => handleCountChange(item.id, e.target.value)}
                                            min="0"
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total-price">
                                <span>合計金額：</span>
                                <span>¥650</span>
                            </div>
                            <button className="cart-button">購入を確定する</button>
                        </>
                    ) : (
                        <p className='cart-message'>商品はありません</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage