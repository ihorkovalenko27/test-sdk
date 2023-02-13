import fs from "fs/promises";
import path from "path";

const logPath = path.resolve("./_log.txt");

const datetime = () => new Date().toLocaleString();

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
