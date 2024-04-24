import React from "react";
import CartItem from "../CartItem/CartItem.js";
import "../Modal/Modal.css"; // Ensure the path is correct based on your project structure

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, totalPrice }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateCart={onUpdateCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))
      ) : (
        <p>The cart is empty.</p>
      )}
      <div className="cart-summary">
        <p>Total Sales: {totalPrice.toFixed(2)} Kr.</p>
      </div>
    </div>
  );
};

export default Cart;
