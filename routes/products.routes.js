import { Router } from "express";
import { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  deleteProduct 
} from "../controllers/products.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

// Rutas públicas
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// Rutas protegidas
router.post("/create", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;
