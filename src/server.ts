import express from "express";
import productRoutes from "./routes/product.routes";

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Product routes
app.use("/products", productRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Products API!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
