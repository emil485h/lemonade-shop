import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.js";
import ProductList from "./components/ProductList/ProductList.js";
import Cart from "./components/Cart/Cart.js";
import Modal from "./components/Modal/Modal.js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLemon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Lemonade",
      price: 25,
      lemonsUsed: 1,
      imageUrl: "lemonade.webp",
    },
    {
      id: 2,
      name: "Mojito",
      price: 32,
      lemonsUsed: 2,
      imageUrl: "Mojito.webp",
    },
    {
      id: 3,
      name: "Gin Hass",
      price: 39,
      lemonsUsed: 2,
      imageUrl: "Gin-Hass.webp",
    },
    {
      id: 4,
      name: "Margarita",
      price: 42,
      lemonsUsed: 3,
      imageUrl: "Margarita-drink-2.webp",
    },
    // Flere produkter kan tilføjes her
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [lemonsUsed, setLemonsUsed] = useState(0);
  const [profit, setProfit] = useState(0.0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const costPerLemon = 2;

  useEffect(() => {
    // Recalculate total price, lemons used, and profit whenever cartItems changes
    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const newLemonsUsed = cartItems.reduce(
      (total, item) => total + item.lemonsUsed * item.quantity,
      0
    );
    const newProfit = cartItems.reduce(
      (total, item) =>
        total + (item.price - costPerLemon * item.lemonsUsed) * item.quantity,
      0
    );

    setTotalPrice(newTotalPrice);
    setLemonsUsed(newLemonsUsed);
    setProfit(newProfit);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== productToRemove.id));
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const cartItemCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div className="App">
      <Header onCartClick={toggleCart} cartItemCount={cartItemCount} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <div>
        <h3>Shop Summary</h3>
        <p>Total Sales: {totalPrice.toFixed(2)} Kr.</p>
        <p>Profit: {profit.toFixed(2)} Kr.</p>
        Lemons Used: {lemonsUsed}
        <FontAwesomeIcon
          icon={faLemon}
          style={{ color: "#fdcb6e", marginLeft: "8px", fontSize: "18px" }}
        />
      </div>
      <Modal isOpen={isCartVisible} onClose={toggleCart}>
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
  );
}

export default App;
