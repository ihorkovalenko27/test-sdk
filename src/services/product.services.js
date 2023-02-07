import Product from "../models/Product.js";

const product = new Product();

class ProductServices {
  async getAllProducts() {
    const result = await product.getAllProducts();
    return result;
  }

  async getProductsById(id) {
    const result = await product.getProductsById(id);

    if (!result) {
      throw new Error(`Not found Product with id ${id}`);
    }

    return result;
  }

  async addNewProduct({ title, description, price }) {
    const result = await product.addNewProduct(title, description, price);

    if (!result) {
      throw new Error(`Not created!`);
    }

    return result;
  }
}

export default ProductServices;
