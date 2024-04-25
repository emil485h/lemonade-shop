import React from "react";
import CartItem from "../CartItem/CartItem.js";
import "../Modal/Modal.css"; // Ensure the path is correct based on your project structure
import "./Cart.css";

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
        <p id="emptyCart">
          Intet at se her, eventyrer! Gå på opdagelse i vores artefakter
        </p>
      )}
      <div className="cart-summary">
        <p>Samlet Bytte: {totalPrice.toFixed(2)} Guld (Kr).</p>
      </div>
    </div>
  );
};

export default Cart;
