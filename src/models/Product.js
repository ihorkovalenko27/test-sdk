import { validation } from "../utils/validationUtil.js";

class Product {
  constructor(data) {
    this.id = validation(data.id, "string");
    this.title = validation(data.title, "string");
    this.description = validation(data.description, "string");
    this.price = validation(data.price, "number");
  }
}

export default Product;
