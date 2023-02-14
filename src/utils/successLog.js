import fs from "fs/promises";
import path from "path";

export const logPath = path.resolve("./_log.txt");
export const datetime = () => new Date().toLocaleString();

export async function successlog(code, message) {
  try {
    const newData = {
      status: "success",
      code,
      message,
      time: datetime(),
    };

    await fs.appendFile(logPath, JSON.stringify(newData), "utf8");
  } catch (error) {
    console.log(error);
  }
}
