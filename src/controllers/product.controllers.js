import ProductServices from "../services/product.services.js";

const productServices = new ProductServices();

/** Class representing controllers for product. */
class ProductControllers {
  /**
   * Get login data.
   * @param {object} body - The object has two property username and password.
   * @return {object} - user login information.
   */
  async loginUser(body) {
    try {
      const result = await productServices.loginUser(body);
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }

  /**
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    try {
      const result = await productServices.getAllProducts();
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }

  /**
   * Get one product by id.
   * @param {number} id - id for search.
   * @return {object} - product data.
   */
  async getProductsById(id) {
    try {
      const result = await productServices.getProductsById(id);
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }
  /**
   * Create new product.
   * @param {object} body - object with new product data.
   * @return {object} - new created product.
   */
  async addNewProduct(body) {
    try {
      const result = await productServices.addNewProduct(body);
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }

  /**
   * Delete product by id.
   * @param {number} id - id for search.
   * @return {object} - deleted product with "isDeleted" & "deletedOn" keys.
   */
  async deleteProduct(id) {
    try {
      const result = await productServices.deleteProduct(id);
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }

  /**
   * Update product by id.
   * @param {number} id - id for search.
   * @param {object} body - object with updated data.
   * @return {object} - product with modified data.
   */
  async updateProduct(id, body) {
    try {
      const result = await productServices.updateProduct(id, body);
      return result;
    } catch (error) {
      return {
        code: error.code,
        message: error.message,
      };
    }
  }
}

export default ProductControllers;
