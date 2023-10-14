import React from 'react';
import { Link, useParams } from 'react-router-dom';

const selectedProduct = {
  id: 1,
  name: 'Product A',
  description: 'A high-quality product with multiple features.',
  price: 29.99,
  image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  category: 'Electronics',
  stock: 15,
};

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <Link to={'/products'}>Back</Link>
      <h2>Product Details {id}</h2>
      <div>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div>
        <h3>{selectedProduct.name}</h3>
        <p>{selectedProduct.description}</p>
        <p>Price: ${selectedProduct.price}</p>
        <p>Category: {selectedProduct.category}</p>
        <p>In Stock: {selectedProduct.stock} units</p>
      </div>
    </div>
  );
}

export default ProductDetail;
