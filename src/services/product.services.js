import BaseModel from "../models/BaseModel.js";
import { ApiError } from "../errors/errorHandler.js";

const product = new BaseModel("https://dummyjson.com", "products");
const auth = new BaseModel("https://dummyjson.com");

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
   * Get all products data.
   * @return {object} - object with products data.
   */
  async getAllProducts() {
    const result = await product.getAll();
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
    const result = await product.create(body);

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
    const result = await product.delete(id);

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
    const result = await product.update(id, body);

    if (!result) {
      throw new ApiError(`Product not updated!`, 400);
    }

    return result;
  }
}

export default ProductServices;
