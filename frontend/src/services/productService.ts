// Function to fetch all products from the backend
export const getAllProducts = async (): Promise<any[]> => {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const productList = await response.json();
    return productList;
  } catch (error) {
    throw new Error(`Error fetching products: ${(error as Error).message}`);
  }
};

// Function to add a new product to the backend
export const addProduct = async (name: string, price: number, description: string): Promise<void> => {
  try {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, description }),
    });
    if (!response.ok) {
      throw new Error('Failed to add product');
    }
    // Optionally, you can return the newly added product from the backend
  } catch (error) {
    throw new Error(`Error adding product: ${(error as Error).message}`);
  }
};
