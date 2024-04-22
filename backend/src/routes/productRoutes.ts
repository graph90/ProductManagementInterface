import express from 'express';
import productController from '../controllers/productController';

const router = express.Router();

router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;
