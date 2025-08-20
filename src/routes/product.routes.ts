import { Router } from "express";
import { getAllProducts, getProductById } from "../controllers/product.controller";


const router = Router();

// Route to get all products
router.get("/", getAllProducts);

// Route to get a product by ID
router.get("/:id", getProductById);

export default router;
