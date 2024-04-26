// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <header>
      <div className="header-content">
        <img className="logo" src="critical.png" />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/products2">Products2</Link>
        </nav>
        <button onClick={onCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon-cart" />
          <span className="cart-item-count">{cartItemCount}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
