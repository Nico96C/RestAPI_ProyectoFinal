import express from 'express';
import cors from 'cors';
import rutasProductos from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { authenticateToken } from './src/middleWare/authentication.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const corsConfig = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500'], //dominios
    method: ['GET', 'POST', 'PUT', 'DELETE'], //metodos
    allowedHeaders: ['Content-Type', 'Authorization'], //cabeceras
    exposedHeaders: ['Content-Type', 'Authorization'], //cabeceras expuestas
    credentials: true, //habilitar cookies
    optionsSuccessStatus: 200, //estado para peticiones exitosas
    maxAge: 600, //tiempo de cache en segundos
}
app.use(cors(corsConfig));

app.use('/api', authRoutes);
app.use(authenticateToken);

app.use('/api', rutasProductos);

app.get('/', (req, res) => {
    res.send('Hola Mundo, servidor con CORS configurado!');
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});