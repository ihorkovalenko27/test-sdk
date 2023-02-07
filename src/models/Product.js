class Product {
  constructor(id, product, category) {
    this.id = id;
    this.product = product;
    this.category = category;
  }

  async getAllProducts() {
    const res = await fetch("https://dummyjson.com/products");
    return await res.json();
  }

  async getProductsById(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return await res.json();
  }

  async addNewProduct(title, description, price) {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `${title}`,
        description: `${description}`,
        price: `${price}`,
      }),
    });
    return await res.json();
  }
}

export default Product;
