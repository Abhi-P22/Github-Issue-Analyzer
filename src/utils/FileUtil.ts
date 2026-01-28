import fs from "fs";
import path from "path";

const filePath = path.resolve("src/data/issues_cache.json");

export function readCacheFile(): any {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function writeCacheFile(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}
