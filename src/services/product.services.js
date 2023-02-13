import BaseServices from "./base.services.js";
import { ApiError } from "../helpers/errorHandler.js";
import { paramsHandler } from "../helpers/paramsHandler.js";
import { successlog } from "../utils/successLog.js";
import { errorlog } from "../utils/errorLog.js";

const product = new BaseServices("https://dummyjson.com", "products");

/** Class representing services for product. */
class ProductServices {
  /**
   * Find search product.
   * @param {string} query - The query for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about query request.
   */
  async searchProduct(data) {
    const result = paramsHandler(data);

    if (!result) {
      errorlog(400, `Query ${data.search} not found`);

      throw new ApiError("Product not found!", 400);
    }

    successlog(200, `Find ${data.search}`);

    return result;
  }

  /**
   * Filter product with selected fields.
   * @param {string} value - The fields for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about filter request.
   */
  async filterSelectProducts(data) {
    const result = paramsHandler(data);

    if (!result) {
      errorlog(400, `${data.select} not found`);

      throw new ApiError("Products not found!", 400);
    }

    successlog(200, `Filter ${data.select} product`);
    return result;
  }

  /**
   * Filter product with selected category.
   * @param {string} category - The category for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about category request.
   */
  async getCategoryProducts(data) {
    const result = paramsHandler(data);

    if (!result) {
      errorlog(400, `${data.category} not found`);
      throw new ApiError("Category not found!", 400);
    }

    successlog(200, `Find ${data.category}`);

    return result;
  }

  /**
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    const result = await product.getAll();

    if (!result) {
      errorlog(500, `Products not found`);

      throw new ApiError(`Products not found`, 500);
    }

    successlog(200, `Get all products`);

    return result;
  }

  /**
   * Get one product by id.
   * @param {number} id - id for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - product data.
   */
  async getProductsById(id) {
    const result = await product.getById(id);

    if (!result) {
      errorlog(400, `Product by ${id} not found`);

      throw new ApiError("Product doesn't exist!", 404);
    }

    successlog(200, `Get product by ${id}`);

    return result;
  }

  /**
   * Create new product.
   * @param {object} body - object with new product data.
   * @throws {ApiError} - result must be non-false
   * @return {object} - new created product.
   */
  async addNewProduct(body) {
    const result = await product.create(body);

    if (!result) {
      errorlog(400, `Product not created!`);

      throw new ApiError(`Product not created!`, 400);
    }

    successlog(201, `Product created!`);

    return result;
  }

  /**
   * Delete product by id.
   * @param {number} id - id for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - deleted product with "isDeleted" & "deletedOn" keys.
   */
  async deleteProduct(id) {
    const result = await product.delete(id);

    if (!result) {
      errorlog(400, `Product with id=${id} not deleted!`);

      throw new ApiError(`Product not deleted!`, 400);
    }

    successlog(200, `Product deleted!`);

    return result;
  }

  /**
   * Update product by id.
   * @param {number} id - id for search.
   * @param {object} body - object with updated data.
   * @throws {ApiError} - result must be non-false
   * @return {object} - product with modified data.
   */
  async updateProduct(id, body, method) {
    const result = await product.update(id, body, method);

    if (!result) {
      errorlog(400, `Product with id=${id} not updated!`);

      throw new ApiError(`Product not updated!`, 400);
    }

    successlog(200, `Product updated!`);

    return result;
  }
}

export default ProductServices;
