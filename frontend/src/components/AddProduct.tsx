import React, { useState } from 'react';
import productService from '../productService';

const AddProduct: React.FC = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Convert price to number
      const priceNumber = parseFloat(price);

      // Add product using productService
      await productService.addProduct(name, priceNumber, description);

      // Reset form inputs
      setName('');
      setPrice('');
      setDescription('');

      // Show success message and navigate back to product list
      alert('Product added successfully!');
      // Redirect to the product list page
      window.location.href = '/products';
    } catch (error) {
      console.error('Error adding product:', error);
      // Show error message to the user
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
