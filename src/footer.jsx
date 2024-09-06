import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src="./images/logo.svg" alt="logo" className="app-logo" />
      </Link>
        <h1 className="app-title">mosya Inc</h1>
    </div>
  )
}

export default Footer