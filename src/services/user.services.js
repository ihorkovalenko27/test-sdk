import BaseServices from "./base.services.js";
import { ApiError } from "../helpers/errorHandler.js";
import { successlog } from "../utils/successLog.js";
import { errorlog } from "../utils/errorLog.js";

const user = new BaseServices("https://dummyjson.com");

class UserServices {
  /**
   * Get login data.
   * @param {object} body - The object has two property username and password.
   * @throws {ApiError} - result must be non-false
   * @return {object} - user login information.
   */
  async loginUser(body) {
    const result = await user.login(body);

    if (!result) {
      errorlog(401, "Username or password is wrong!");

      throw new ApiError("Username or password is wrong!", 401);
    }

    successlog(200, "Login user");

    return result;
  }
}

export default UserServices;
