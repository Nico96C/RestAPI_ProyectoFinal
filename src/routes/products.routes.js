import express from 'express';
import {getAllProducts, getProductById, addProduct, updateProduct, deleteProduct} from '../controllers/products.controllers.js';

const routes = express.Router();

routes.get('/products', getAllProducts);

routes.get('/products/:id', getProductById)

routes.post('/products/create', addProduct);

routes.put('/products/:id', updateProduct);

routes.delete('/products/:id', deleteProduct);

export default routes;