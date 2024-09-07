import React, { useState } from 'react';
import './App.css'
import './reset.css'
import TopPage from './top-page'
import CartPage from './cart-page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [cart, setCart] = useState({ items: [], totalCount: 0 });

  //addToCart,setCartについてはメモの「入門3-3 useState」を参照
  const addToCart = (productId, productName, productPrice, imagePath) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.id === productId);
      let updatedItems;

      if (existingItemIndex !== -1) {
        updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          count: updatedItems[existingItemIndex].count + 1
        };
      } else {
        updatedItems = [
          ...prevCart.items,
          {
            id: productId,
            name: productName,
            price: productPrice,
            image: imagePath,
            count: 1
          }
        ];
      }

      const newCart = {
        items: updatedItems,
        totalCount: prevCart.totalCount + 1
      };

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
