import express from 'express'
import cors from 'cors';//importa los paquetes cors--permisoa de acceso
import path from 'path';
import { fileURLToPath } from 'url';
import clientesRoutes from './routes/clientes.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import productosRoutes from './routes/productos.routes.js'
console.log("AngelP25")
//definir modulo de ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const corsOptions = {
    origin: '*',//la direccion del dominio del servidor
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());//para que interprete los objetos json
app.use(express.urlencoded({ extended: true }));//se añade para poder receptar formularios
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
//rutas
app.use('/api', clientesRoutes)
app.use('/api', usuariosRoutes)
app.use('/api', productosRoutes)



app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    })
})

console.log("AngelP25")
export default app;
