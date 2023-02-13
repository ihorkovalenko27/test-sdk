import BaseServices from "./base.services.js";
import { ApiError } from "../errors/errorHandler.js";
import { log } from "../log/functionsLog.js";
import { helpers as productHelpers } from "../helpers/helpers.js";

const product = new BaseServices("https://dummyjson.com", "products");

/** Class representing services for product. */
class ProductServices {
  /**
   * Get login data.
   * @param {object} body - The object has two property username and password.
   * @throws {ApiError} - result must be non-false
   * @return {object} - user login information.
   */
  async loginUser(body) {
    const result = await product.login(body);

    if (!result) {
      log("error", 401, "Username or password is wrong!");

      throw new ApiError("Username or password is wrong!", 401);
    }

    log("success", 200, "Login user");

    return result;
  }

  /**
   * Find search product.
   * @param {string} query - The query for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about query request.
   */
  async searchProduct(data) {
    const result = productHelpers(data);

    if (!result) {
      log("error", 400, `Query ${data.search} not found`);

      throw new ApiError("Product not found!", 400);
    }

    log("success", 200, `Find ${data.search}`);

    return result;
  }

  /**
   * Filter product with selected fields.
   * @param {string} value - The fields for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about filter request.
   */
  async filterSelectProducts(data) {
    const result = productHelpers(data);

    if (!result) {
      log("error", 400, `${data.select} not found`);

      throw new ApiError("Products not found!", 400);
    }

    log("success", 200, `Filter ${data.select} product`);
    return result;
  }

  /**
   * Filter product with selected category.
   * @param {string} category - The category for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about category request.
   */
  async getCategoryProducts(data) {
    const result = productHelpers(data);

    if (!result) {
      log("error", 400, `${data.category} not found`);
      throw new ApiError("Category not found!", 400);
    }

    log("success", 200, `Find ${data.category}`);

    return result;
  }

  /**
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    const result = await product.getAll();

    if (!result) {
      log("error", 500, `Products not found`);

      throw new ApiError(`Products not found`, 500);
    }

    log("success", 200, `Get all products`);

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
      log("error", 400, `Product by ${id} not found`);

      throw new ApiError("Product doesn't exist!", 404);
    }

    log("success", 200, `Get product by ${id}`);

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
      log("error", 400, `Product not created!`);

      throw new ApiError(`Product not created!`, 400);
    }

    log("success", 201, `Product created!`);

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
      log("error", 400, `Product with id=${id} not deleted!`);

      throw new ApiError(`Product not deleted!`, 400);
    }

    log("success", 200, `Product deleted!`);

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
      log("error", 400, `Product with id=${id} not updated!`);

      throw new ApiError(`Product not updated!`, 400);
    }

    log("success", 200, `Product updated!`);

    return result;
  }
}

export default ProductServices;
