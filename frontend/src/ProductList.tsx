import React, { useState, useEffect } from 'react';
import productService from './productService';

// Define the Product type
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const productList = await productService.getAllProducts();
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
