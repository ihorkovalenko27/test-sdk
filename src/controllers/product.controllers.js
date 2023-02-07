import ProductServices from "../services/product.services.js";

const productServices = new ProductServices();

class ProductControllers {
  async getAllProducts(req, res, next) {
    try {
      const result = await productServices.getAllProducts();
      res.status(200).json(result);
    } catch (error) {
      throw new Error("Error!");
    }
  }

  async getProductsById(req, res, next) {
    try {
      const result = await productServices.getProductsById(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      throw new Error("Error!");
    }
  }

  async addNewProduct(req, res, next) {
    try {
      const result = await productServices.addNewProduct(req.body);
      res.status(201).json(result);
    } catch (error) {
      throw new Error("Error!");
    }
  }
}

export default ProductControllers;
