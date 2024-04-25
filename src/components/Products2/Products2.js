import React, { useEffect, useState } from "react";
import axios from "axios";
import './Products2.css';

function Products2({ onAddToCart }) {  // Added prop for handling add to cart
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/wpapi/wp-json/wp/v2/posts?_embed")
      .then((res) => {
        setPosts(res.data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          description: post.content.rendered,
          price: parseFloat(post.meta.price),  // Assuming you have a price meta field
          image: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : null,
        })));
      });
  }, []);

  const postsJsx = posts.map((post) => (
    <div className="product-list">
    <div className="product-item" key={post.id}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
      {post.image && <img src={post.image} alt={post.title} className="product-image"/>}
      <p>Price: ${post.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(post)}>Add to Cart</button>
    </div>
    </div>
  ));

  return <ul>{postsJsx}</ul>;
}

export default Products2;
