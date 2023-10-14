import { Link } from 'react-router-dom';

const data = {
  products: [
    {
      id: 1,
      name: 'Product A',
      description: 'A high-quality product with multiple features.',
      price: 29.99,
      image: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      category: 'Electronics',
      stock: 15,
    },
    {
      id: 2,
      name: 'Product B',
      description: 'An elegant product that suits your style.',
      price: 49.99,
      image: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      category: 'Fashion',
      stock: 8,
    },
    {
      id: 3,
      name: 'Product C',
      description: 'A versatile product for your everyday needs.',
      price: 19.99,
      image: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      category: 'Home & Kitchen',
      stock: 25,
    },
    {
      id: 4,
      name: 'Product D',
      description: 'A powerful product designed for professionals.',
      price: 99.99,
      image: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      category: 'Electronics',
      stock: 12,
    },
    {
      id: 5,
      name: 'Product E',
      description: "A comfortable product that you'll love.",
      price: 34.99,
      image: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      category: 'Fashion',
      stock: 5,
    },
  ],
};

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <Link to={`/products/${product.id}`}>
                <h3>{product.name}</h3>
              </Link>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>In Stock: {product.stock} units</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
