import express from "express";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import swaggerDocs from "./docs/swagger.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/employees", employeeRoutes);

// Configuración de Swagger
swaggerDocs(app);

// Iniciar servidor
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//Ruta base del APIWEB, nuestro endpoint base
app.get("/", (req, res) => {
        res.send("<h1>Bienvenido a mi API-WEB</h1>");
    });
    app.listen(port, () => {
        console.log(`Se inicio el servidor, y esta escuchando por el puerto ${port}`);
    });
