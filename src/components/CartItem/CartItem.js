import React from 'react';
import '../Modal/Modal.css'; // If you have specific styles for CartItem

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div>
        <button onClick={() => onUpdateCart(item, item.quantity + 1)}>+</button>
        <button onClick={() => onUpdateCart(item, item.quantity - 1)}>-</button>
        <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;