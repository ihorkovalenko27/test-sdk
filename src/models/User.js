import { validation } from "../utils/validationUtil.js";

class User {
  constructor({ username, password }) {
    this.username = validation(username, "string");
    this.password = validation(password, "string");
  }
}

export default User;
