import React from 'react'
import Header from './header';
import Footer from './footer';
import { products } from './product-data';

const TopPage = ({ addToCart, cart }) => {
    return (
        <div className="container">
            <Header cart={cart} />
            <div className="product-wrapper">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} className="product-img" />
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">¥{product.price}</p>
                        <button
                            className="product-add-button"
                            onClick={() => addToCart(product.id)}
                        >
                            カートに追加
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default TopPage