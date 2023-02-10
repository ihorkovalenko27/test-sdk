class Product {
  constructor(baseUrl, limit, query) {
    this.baseUrl = baseUrl;
    this.query = query;
    this.limit = limit;
  }

  async searchProduct(query) {
    const res = await fetch(`${this.baseUrl}/products/search?q=${query}`);
    return await res.json();
  }

  async searchSelectProducts(value) {
    const res = await fetch(
      `${this.baseUrl}/products?limit=${this.limit}&select=${value}`
    );
    return await res.json();
  }

  async getCategoryProducts(category) {
    const res = await fetch(`${this.baseUrl}/products/category/${category}`);
    return await res.json();
  }
}

export default Product;
