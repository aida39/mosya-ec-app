import './App.css'
import TopPage from './top-page.jsx'
import CartPage from './cart-page.jsx'

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <TopPage />
    ),
  },

  {
    path: "cart",
    element: (
      <CartPage />
    ),
  },

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
