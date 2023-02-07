import express from "express";
import cors from "cors";

import ProductControllers from "./controllers/product.controllers.js";

const products = new ProductControllers();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", products.getAllProducts);
app.get("/products/:id", products.getProductsById);
app.post("/products", products.addNewProduct);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export default app;
