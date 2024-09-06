import './App.css'
import './reset.css'
import TopPage from './top-page'
import CartPage from './cart-page'

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
