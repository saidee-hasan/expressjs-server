import { IncomingMessage, ServerResponse } from "http";
import { handleProduct } from "../controllers/product.controller";

export const routeHandler = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  // Set common headers
  res.setHeader("Content-Type", "application/json");

  try {
    if (url === "/" && method === "GET") {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Welcome to the home page!" }));
    } else if (url === "/product" && method === "GET") {
      res.statusCode = 200;
    await  handleProduct(req,res)
      

    } 
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Internal server error" }));
  }
};
