class Product {
  constructor({ id, title, description, price }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
  }

  validateBody() {
    if (typeof this.title !== "string" || this.title === "") {
      throw new Error("Product title field must be a string");
    }
    if (typeof this.description !== "string" || this.description === "") {
      throw new Error("Product description field must be a string");
    }
    if (typeof this.price !== "number" || this.price < 1) {
      throw new Error("Product price field must be a number");
    }
  }

  validateID() {
    if (typeof this.id !== "string" || this.id === "") {
      throw new Error("Product id field must be a string");
    }
  }
}

export default Product;
