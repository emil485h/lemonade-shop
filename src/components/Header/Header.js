import React from "react";

const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <div className="header">
      <img className="logo" src="Lemonade-Logo.svg" alt="Lemonade Shop Logo" />

      <button className="Cart-icon" onClick={onCartClick}>
        {cartItemCount > 0 && (
          <span className="cart-item-count">{cartItemCount}</span>
        )}
      </button>
    </div>
  );
};

export default Header;
