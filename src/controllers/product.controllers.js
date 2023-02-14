import ProductServices from "../services/product.services.js";
import ctrlWrapper from "../middelwares/ctrlWrapper.js";
import Product from "../models/Product.js";

const productServices = new ProductServices();

/** Class representing controllers for product. */
class ProductControllers {
  /**
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    return ctrlWrapper(productServices.getAllProducts());
  }

  /**
   * Get one product by id.
   * @param {number} id - id for search.
   * @return {object} - product data.
   */
  async getProductsById(id) {
    return ctrlWrapper(
      productServices.getProductsById(id),
      new Product({ id }).validate()
    );
  }
  /**
   * Create new product.
   * @param {object} body - object with new product data.
   * @return {object} - new created product.
   */
  async addNewProduct(body) {
    return ctrlWrapper(
      productServices.addNewProduct(body),
      new Product(body).validate()
    );
  }

  /**
   * Delete product by id.
   * @param {number} id - id for search.
   * @return {object} - deleted product with "isDeleted" & "deletedOn" keys.
   */
  async deleteProduct(id) {
    return ctrlWrapper(
      productServices.deleteProduct(id),
      new Product({ id }).validate()
    );
  }

  /**
   * Update product by id.
   * @param {number} id - id for search.
   * @param {object} body - object with updated data.
   * @return {object} - product with modified data.
   */
  async updateProduct(body, method) {
    return ctrlWrapper(
      productServices.updateProduct(body, method),
      new Product(body).validate()
    );
  }

  /**
   * Find search product.
   * @param {string} data - The query for search.
=   * @return {object} - data about query request.
   */
  async searchProduct(data) {
    return ctrlWrapper(productServices.searchProduct(data));
  }

  /**
   * Filter product with selected fields.
   * @param {string} value - The fields for search.
   * @return {object} - data about filter request.
   */
  async filterSelectProducts(data) {
    return ctrlWrapper(productServices.filterSelectProducts(data));
  }

  /**
   * Filter product with selected category.
   * @param {string} category - The category for search.
   * @return {object} - data about category request.
   */
  async getCategoryProducts(data) {
    return ctrlWrapper(productServices.getCategoryProducts(data));
  }
}

export default ProductControllers;
