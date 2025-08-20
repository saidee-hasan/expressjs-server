"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_1 = require("../data/product");
const getAllProducts = (req, res) => {
    res.json(product_1.products);
};
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => {
    const id = Number(req.params.id);
    const product = product_1.products.find(p => p.id === id);
    if (product)
        res.json(product);
    else
        res.status(404).send('Product not found');
};
exports.getProductById = getProductById;
const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = product_1.products.findIndex(p => p.id === id);
    if (index !== -1) {
        product_1.products[index].name = req.body.name;
        res.json(product_1.products[index]);
    }
    else {
        res.status(404).send('Product not found');
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    const index = product_1.products.findIndex(p => p.id === id);
    if (index !== -1) {
        product_1.products.splice(index, 1);
        res.json({ message: 'Product deleted' });
    }
    else {
        res.status(404).send('Product not found');
    }
};
exports.deleteProduct = deleteProduct;
