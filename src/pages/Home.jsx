import { Link, useRoutes } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Our E-commerce Store</h2>
      <p>Discover the best products at amazing prices!</p>
      <Link to="/products">Browse Products</Link>
    </div>
  );
}

export default Home;
