import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import rutasProductos from './src/routes/products.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { authenticateToken } from './src/middleWare/authentication.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));

const corsConfig = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'https://rest-api-proyecto-final.vercel.app'], //dominios
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
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});