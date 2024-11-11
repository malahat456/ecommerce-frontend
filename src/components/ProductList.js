import React, { useEffect, useState } from 'react';
import './ProductList.css'; // Uncomment this line to apply styles

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div key={product._id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
