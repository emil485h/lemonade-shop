import React, { useEffect, useState } from "react";
import axios from "axios";

function Products2() {
  // Initialize state 'posts' with an empty array. This state will hold the fetched posts.
  const [posts, setPosts] = useState([]);

  // useEffect hook to fetch posts from the WordPress REST API when the component mounts
  useEffect(() => {
    // Use axios to make a GET request to the WordPress REST API for posts
    axios
      .get("http://localhost/wp-json/wp/v2/posts?_embed")
      .then((res) => setPosts(res.data)); // On success, update the 'posts' state with the fetched data
  }, []); // The empty dependency array means this effect runs only once after the initial render

  // Map each post in the 'posts' state to an <li> element with its content
  const postsJsx = posts.map((post) => (
    // Set the inner HTML of the <li> to the post's content. Note: This can be a security risk (XSS)
    <div>
    
      <h1
        key={post.id}
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      >
      
      </h1>
      <p class="grid-container"dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
        </p> 
    </div>
  ));

  // Render the list of posts inside a <ul> element
  return <ul>{postsJsx}</ul>;
}

export default Products2;
