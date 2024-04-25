// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <header>
      <img className="logo" src="Lemonade-Logo.webp" />
      {/* Other header content */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products2">Products2</Link>
      </nav>
      <button onClick={onCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
        {cartItemCount}
      </button>
    </header>
  );
};

export default Header;
