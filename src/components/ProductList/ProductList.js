import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products ');
        setProducts(response.data.products); // Assume response.data contains the array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.product} className="product-image" />
          <h3>{product.product}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price} Kr.</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProductList;
