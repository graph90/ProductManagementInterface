// export default App;
import React, { useState } from 'react';
import Login from './Login';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

const App: React.FC = () => {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState<string>('login');

  // Function to render the current page
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />;
      case 'products':
        return <ProductList />;
      case 'add-product':
        return <AddProduct />;
      default:
        return <Login />;
    }
  };

  return (
    <div>
      {/* Navigation links */}
      <nav>
        <ul>
          <li><button onClick={() => setCurrentPage('login')}>Login</button></li>
          <li><button onClick={() => setCurrentPage('products')}>Product List</button></li>
          <li><button onClick={() => setCurrentPage('add-product')}>Add Product</button></li>
        </ul>
      </nav>
      
      {/* Render the current page */}
      {renderPage()}
    </div>
  );
};

export default App;
