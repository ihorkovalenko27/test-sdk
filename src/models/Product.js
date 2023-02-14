import { ValidationError } from "../helpers/errorHandler.js";
class Product {
  constructor({ id, title, description, price }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  // validate() {
  //   if (typeof this.id !== "string" || this.id === "") {
  //     throw new ValidationError(
  //       403,
  //       "Product id field must to be a string and not empty!"
  //     );
  //   }
  //   if (typeof this.title !== "string" || this.title === "") {
  //     throw new ValidationError(
  //       403,
  //       "Title field must to be a string and not empty!"
  //     );
  //   }
  //   if (typeof this.description !== "string" || this.description === "") {
  //     throw new ValidationError(
  //       403,
  //       "Product description field must to be a string and not empty!"
  //     );
  //   }
  //   if (typeof this.price !== "number" || this.price < 1) {
  //     throw new ValidationError(
  //       403,
  //       "Product price field must be a number and more than zero"
  //     );
  //   }
  // }
}

export default Product;
