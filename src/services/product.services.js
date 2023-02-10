import BaseServices from "./base.services.js";
import Product from "../models/Product.js";
import { ApiError } from "../errors/errorHandler.js";
const productModel = new Product("https://dummyjson.com", 10);
const productBase = new BaseServices("https://dummyjson.com", "products");
const auth = new BaseServices("https://dummyjson.com");

/** Class representing services for product. */
class ProductServices {
  /**
   * Get login data.
   * @param {object} body - The object has two property username and password.
   * @throws {ApiError} - result must be non-false
   * @return {object} - user login information.
   */
  async loginUser(body) {
    const result = await auth.login(body);

    if (!result) {
      throw new ApiError("Username or password is wrong!", 401);
    }

    return result;
  }

  /**
   * Find search product.
   * @param {string} query - The query for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about query request.
   */
  async searchProduct(query) {
    const result = await productModel.searchProduct(query);

    if (!result) {
      throw new ApiError("Product not found!", 400);
    }

    return result;
  }

  /**
   * Filter product with selected fields.
   * @param {string} value - The fields for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about filter request.
   */
  async filterSelectProducts(value) {
    const result = await productModel.searchSelectProducts(value);

    if (!result) {
      throw new ApiError("Products not found!", 400);
    }

    return result;
  }

  /**
   * Filter product with selected category.
   * @param {string} category - The category for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - data about category request.
   */
  async getCategoryProducts(category) {
    const result = await productModel.getCategoryProducts(category);

    if (!result) {
      throw new ApiError("Category not found!", 400);
    }

    return result;
  }

  /**
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    const result = await productBase.getAll();
    return result;
  }

  /**
   * Get one product by id.
   * @param {number} id - id for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - product data.
   */
  async getProductsById(id) {
    const result = await productBase.getById(id);

    if (!result) {
      throw new ApiError("Product doesn't exist!", 404);
    }

    return result;
  }

  /**
   * Create new product.
   * @param {object} body - object with new product data.
   * @throws {ApiError} - result must be non-false
   * @return {object} - new created product.
   */
  async addNewProduct(body) {
    const result = await productBase.create(body);

    if (!result) {
      throw new ApiError(`Product not created!`, 400);
    }

    return result;
  }

  /**
   * Delete product by id.
   * @param {number} id - id for search.
   * @throws {ApiError} - result must be non-false
   * @return {object} - deleted product with "isDeleted" & "deletedOn" keys.
   */
  async deleteProduct(id) {
    const result = await productBase.delete(id);

    if (!result) {
      throw new ApiError(`Product not deleted!`, 400);
    }

    return result;
  }

  /**
   * Update product by id.
   * @param {number} id - id for search.
   * @param {object} body - object with updated data.
   * @throws {ApiError} - result must be non-false
   * @return {object} - product with modified data.
   */
  async updateProduct(id, body) {
    const result = await productBase.update(id, body);

    if (!result) {
      throw new ApiError(`Product not updated!`, 400);
    }

    return result;
  }
}

export default ProductServices;
