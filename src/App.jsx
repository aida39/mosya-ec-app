import React, { useState } from 'react';
import './App.css'
import './reset.css'
import TopPage from './top-page'
import CartPage from './cart-page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [cart, setCart] = useState({ items: {}, totalCount: 0 });

  const addToCart = (productId) => {
    setCart(prevCart => {
      const updatedItems = { ...prevCart.items };
      if (updatedItems[productId]) {
        updatedItems[productId].count += 1;
      } else {
        updatedItems[productId] = { id: productId, count: 1 };
      }
      const newCart = {
        items: updatedItems,
        totalCount: prevCart.totalCount + 1
      };

      // カートの中身をコンソールに表示
      console.log('Updated Cart:', newCart);

      return newCart;
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopPage cart={cart} addToCart={addToCart} />,
    },
    {
      path: "cart",
      element: <CartPage cart={cart} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
