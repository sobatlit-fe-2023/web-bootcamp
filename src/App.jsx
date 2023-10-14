import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/products/:id',
    element: <ProductDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
