// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <header>
      {/* Other header content */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products2">Products2</Link>
        <button onClick={onCartClick}>Cart ({cartItemCount})</button>
      </nav>
    </header>
  );
};

export default Header;
