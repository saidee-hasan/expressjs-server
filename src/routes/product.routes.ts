import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = Router();

// CRUD routes
router.get("/", getAllProducts);        // GET /api/products
router.get("/:id", getProductById);     // GET /api/products/:id
router.post("/", createProduct);        // POST /api/products
router.put("/:id", updateProduct);      // PUT /api/products/:id
router.delete("/:id", deleteProduct);   // DELETE /api/products/:id

export default router;
