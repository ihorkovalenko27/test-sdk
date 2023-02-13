class Product {
  constructor({ id = "id", title = "title", description = "desc", price = 1 }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  validate() {
    if (typeof this.id !== "string" || this.id === "") {
      throw new Error("Product id field must to be a string and not empty!");
    }
    if (typeof this.title !== "string" || this.title === "") {
      throw new Error("Title field must to be a string and not empty!");
    }
    if (typeof this.description !== "string" || this.description === "") {
      throw new Error(
        "Product description field must to be a string and not empty!"
      );
    }
    if (typeof this.price !== "number" || this.price < 1) {
      throw new Error(
        "Product price field must be a number and more than zero"
      );
    }
  }
}

export default Product;
