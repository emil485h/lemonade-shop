import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import '../Modal/Modal.css'; // Make sure the path is correct based on your project structure

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Kurv</h2>
      {cartItems.map((item) => (
        // Assuming CartItem is a separate component that you want to use
        <CartItem key={item.id} item={item} onUpdateCart={onUpdateCart} onRemoveFromCart={onRemoveFromCart} />
      ))}
      <p>Totalpris: {totalPrice.toFixed(2)} Kr.</p>
    </div>
  );
};

export default Cart;
