import React, { useState } from 'react';
import Header from './components/Header/Header.js';
import ProductList from './components/ProductList/ProductList.js';
import Cart from './components/Cart/Cart.js';
import Modal from './components/Modal/Modal.js';
import './App.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Lemonade', price: 25, imageUrl:'lemonade.webp' },
    { id: 2, name: 'Mojito', price: 32, imageUrl:'Mojito.webp' },
    { id: 3, name: 'Gin Hass', price: 39, imageUrl:'Gin-Hass.webp' },
    { id: 4, name: 'Margarita', price: 42, imageUrl:'Margarita-drink-2.webp' },
    // Flere produkter kan tilføjes her
  ]);

  const [cartItems, setCartItems] = useState([]);

  const [isCartVisible, setIsCartVisible] = useState(false);


  

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const itemExists = prevItems.find((item) => item.id === product.id);
  
      if (itemExists) {
        // If it is, increase the quantity
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it's not, add the new item to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateCart = (product, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        // If the quantity is 0 or less, remove the item from the cart
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        // Otherwise, update the quantity of the item
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        );
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== product.id);
    });
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };


  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="App">
      <Header onCartClick={toggleCart} cartItemCount={cartItemCount} />
      <ProductList products={products} onAddToCart={handleAddToCart} />
      <Modal isOpen={isCartVisible} onClose={toggleCart}>
        <Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} onRemoveFromCart={handleRemoveFromCart} />
      </Modal>
    </div>
  );

  
}

export default App;
