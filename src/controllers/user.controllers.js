import UserServices from "../services/user.services.js";
import ctrlWrapper from "../helpers/ctrlHandler.js";
import User from "../models/User.js";

const user = new UserServices();

class UserControllers {
  async loginUser(body) {
    return ctrlWrapper(user.loginUser(body), new User(body));
  }
}

export default UserControllers;
