import express from 'express';
import { login } from '../controllers/auth.controllers.js';

const routes = express.Router();

routes.post('/auth/login', login);

//routes.post('/products', addProduct);

export default routes;