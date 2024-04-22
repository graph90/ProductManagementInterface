import { Request, Response } from 'express';
import productService from '../services/productService';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error: any) { // Explicitly specify 'any' type for the error parameter
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description } = req.body;
    const product = await productService.addProduct(name, price, description);
    res.status(201).json(product);
  } catch (error: any) { // Explicitly specify 'any' type for the error parameter
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error: any) { // Explicitly specify 'any' type for the error parameter
    res.status(500).json({ message: error.message });
  }
};

export default { getAllProducts, addProduct, deleteProduct };
