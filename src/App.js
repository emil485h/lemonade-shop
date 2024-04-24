import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header.js";
import ProductList from "./components/ProductList/ProductList.js";
import Cart from "./components/Cart/Cart.js";
import Modal from "./components/Modal/Modal.js";
import product from "./components/Products/Products.js"; // Example additional component
import products2 from "./components/Products2/Products2.js"; // Example additional component
import Home from "./components/HomePage/Home.js"; // Example home component
import "./App.css";

function App() {
  const [products] = useState([
    // Flere produkter kan tilføjes her
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [lemonsUsed, setLemonsUsed] = useState(0);
  const [profit, setProfit] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const costPerLemon = 2;

  const handleAddToCart = (productToAdd) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === productToAdd.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
  };

  const handleUpdateCart = (productToUpdate, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productToUpdate.id
            ? { ...item, quantity: newQuantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productToRemove.id)
    );
  };

  useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Header
          onCartClick={() => setIsCartVisible(true)}
          cartItemCount={cartItems.length}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <ProductList products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route path="/products2" element={<products2 />} />
        </Routes>
        <Modal isOpen={isCartVisible} onClose={() => setIsCartVisible(false)}>
          <Cart
            cartItems={cartItems}
            onUpdateCart={handleUpdateCart}
            onRemoveFromCart={handleRemoveFromCart}
            totalPrice={totalPrice}
            profit={profit}
            lemonsUsed={lemonsUsed}
          />
        </Modal>
      </div>
    </Router>
  );
}

export default App;
