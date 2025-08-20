import { Server, createServer, IncomingMessage, ServerResponse } from "http";
import { routeHandler } from "./routes/product.routes";


let server: Server;


server = createServer((req, res) => {
routeHandler(req,res)
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
