import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Price: {product.price} Kr.</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
  

export default ProductList;
