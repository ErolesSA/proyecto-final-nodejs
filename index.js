import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

// Firebase
import "./config/firebase.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

// Ruta no encontrada
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Servidor corriendo
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
