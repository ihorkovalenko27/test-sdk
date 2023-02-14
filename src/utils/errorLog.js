import fs from "fs/promises";
import { logPath, datetime } from "./successLog";

export async function errorlog(code, message) {
  try {
    const newData = {
      status: "error",
      code,
      message,
      time: datetime(),
    };

    await fs.appendFile(logPath, JSON.stringify(newData), "utf8");
  } catch (error) {
    console.log(error);
  }
}
