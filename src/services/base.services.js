class BaseServices {
  constructor(baseUrl, category) {
    this.baseUrl = baseUrl;
    this.category = category;
  }

  async login({ username, password }) {
    const res = await fetch(`${this.baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    return await res.json();
  }

  async getAll() {
    const res = await fetch(`${this.baseUrl}/${this.category}`);
    return await res.json();
  }

  async getById(id) {
    const res = await fetch(`${this.baseUrl}/${this.category}/${id}`);
    return await res.json();
  }

  async create(body) {
    const res = await fetch(`${this.baseUrl}/${this.category}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  }

  async delete(id) {
    const res = await fetch(`${this.baseUrl}/${this.category}/${id}`, {
      method: "DELETE",
    });

    return await res.json();
  }

  async update(body, method) {
    const res = await fetch(`${this.baseUrl}/${this.category}/${body.id}`, {
      method: method /* PATCH or PUT */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  }
}

export default BaseServices;
