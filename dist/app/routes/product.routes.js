"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
// CRUD routes
router.get("/", product_controller_1.getAllProducts); // GET /api/products
router.get("/:id", product_controller_1.getProductById); // GET /api/products/:id     // POST /api/products
router.put("/:id", product_controller_1.updateProduct); // PUT /api/products/:id
router.delete("/:id", product_controller_1.deleteProduct); // DELETE /api/products/:id
exports.default = router;
