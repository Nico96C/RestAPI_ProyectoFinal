import express from 'express';
import {getAllProducts, getProductById, addProduct, deleteProduct} from '../controllers/products.controllers.js';

const routes = express.Router();

routes.get('/products', getAllProducts);

routes.get('/products/:id', getProductById)

routes.post('/addProducts', addProduct);

routes.delete('/deleteProducts/:id', deleteProduct);

export default routes;