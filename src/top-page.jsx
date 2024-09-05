import React from 'react'
import { Link } from "react-router-dom";

const TopPage = () => {
    return (
        <>
            <div>TopPage</div>
            <Link to="/cart">カートへ</Link>
        </>
    )
}

export default TopPage