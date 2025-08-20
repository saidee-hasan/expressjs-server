import { Request, Response } from 'express';
import { products } from '../data/product';




export const getAllProducts = (req: Request, res: Response) => {
  res.json(products);
};

export const getProductById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
};



export const updateProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index].name = req.body.name;
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).send('Product not found');
  }
};