import fs from "fs/promises";
import path from "path";

export const successPath = path.resolve("./_successLog.txt");
export const errorPath = path.resolve("./_errorLog.txt");

export const datetime = () => new Date().toLocaleString();

export async function successlog(status, code, message) {
  try {
    const newData = {
      status,
      code,
      message,
      time: datetime(),
    };

    const path = status === "success" ? successPath : errorPath;

    await fs.appendFile(path, JSON.stringify(newData), "utf8");
  } catch (error) {
    console.log(error);
  }
}
