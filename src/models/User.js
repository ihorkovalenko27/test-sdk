class User {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }

  validate() {
    if (typeof this.username !== "string" || this.username === "") {
      throw new Error("Username field must to be a string and not empty!");
    }
    if (typeof this.password !== "string" || this.password === "") {
      throw new Error("Password field must to be a string and not empty!");
    }
  }
}

export default User;
