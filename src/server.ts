import express from "express";
import productRoutes from "./app/routes/product.routes";


const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/products", productRoutes);


// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
