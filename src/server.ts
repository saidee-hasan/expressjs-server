import express from "express";
import productRoutes from "./routes/product.routes";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/products", productRoutes); // All product routes prefixed with /api/products

// Optional root route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
