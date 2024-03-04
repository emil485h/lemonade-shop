import React from 'react';
import cartIcon from './cart-icon.png'; // Use your cart icon image path


const Header = ({ onCartClick, cartItemCount }) => {
  return (
    <div className="header">
      <img className='logo' src='Lemonade-Logo.svg' alt="Lemonade Shop Logo" />

      <button className='Cart-icon' onClick={onCartClick}>
        {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
        <img src={cartIcon} alt="Cart" />
        
      </button>
    </div>
  );
};

export default Header;