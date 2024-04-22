interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = []; // Initialize with an empty array

const getAllProducts = async () => {
  return products;
};

const addProduct = async (name: string, price: number, description: string) => {
  const id = Math.random().toString(36).substr(2, 9); // Generate unique ID
  const product = { id, name, price, description };
  products.push(product);
  return product;
};

const deleteProduct = async (id: string) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
  }
};

export default { getAllProducts, addProduct, deleteProduct };
