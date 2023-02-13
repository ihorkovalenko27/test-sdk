import UserServices from "../services/user.services.js";
import ctrlWrapper from "../middelware/ctrlWrapper.js";
import User from "../models/User.js";

const user = new UserServices();

class UserControllers {
  async loginUser(body) {
    return ctrlWrapper(user.loginUser(body), new User(body).validate());
  }
}

export default UserControllers;
