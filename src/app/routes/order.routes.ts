import { Router } from "express";
import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "../controllers/order.controller";


const router = Router();

// CRUD routes
router.get("/", getAllOrders);          // GET /api/orders
router.get("/:id", getOrderById);       // GET /api/orders/:id
router.post("/", createOrder);          // POST /api/orders
router.put("/:id", updateOrder);        // PUT /api/orders/:id
router.delete("/:id", deleteOrder);     // DELETE /api/orders/:id

export default router;
