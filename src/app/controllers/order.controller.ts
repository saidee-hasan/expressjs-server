import { Request, Response } from "express";
import { orders } from "../data/order";



// Get all orders
export const getAllOrders = (req: Request, res: Response) => {
  res.json(orders);
};

// Get order by ID
export const getOrderById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const order = orders.find((o:number) => o.id === id);
  if (order) res.json(order);
  else res.status(404).send("Order not found");
};

// Create new order
export const createOrder = (req: Request, res: Response) => {
  const newOrder: Order = {
    id: Date.now(),
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  orders.push(newOrder);
  res.status(201).json(newOrder);
};

// Update order
export const updateOrder = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders[index].productId = req.body.productId ?? orders[index].productId;
    orders[index].quantity = req.body.quantity ?? orders[index].quantity;
    res.json(orders[index]);
  } else {
    res.status(404).send("Order not found");
  }
};

// Delete order
export const deleteOrder = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders.splice(index, 1);
    res.json({ message: "Order deleted" });
  } else {
    res.status(404).send("Order not found");
  }
};
