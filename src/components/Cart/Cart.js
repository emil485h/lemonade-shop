import React from "react";
import CartItem from "../CartItem/CartItem.js";
import "../Modal/Modal.css"; // Ensure the path is correct based on your project structure
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

const Cart = ({
  cartItems,
  onUpdateCart,
  onRemoveFromCart,
  totalPrice,
  profit,
  lemonsUsed,
}) => {
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
        <p>Profit: {profit.toFixed(2)} Kr.</p>
        Lemons Used: {lemonsUsed}
        <FontAwesomeIcon
          icon={faLemon}
          style={{ color: "#fdcb6e", marginLeft: "8px", fontSize: "18px" }}
        />
      </div>
    </div>
  );
};

export default Cart;
