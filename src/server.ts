import express from "express";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
