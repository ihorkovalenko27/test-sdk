import fs from "fs/promises";
import path from "path";

const logPath = path.resolve("./src/log/log.txt");

const datetime = () => new Date().toLocaleString();

export async function log(status, code, message) {
  try {
    const newData = {
      status,
      code,
      message,
      time: datetime(),
    };

    await fs.appendFile(logPath, JSON.stringify(newData), "utf8");
  } catch (error) {
    console.log(error);
  }
}
