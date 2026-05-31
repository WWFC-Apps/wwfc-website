import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

const csvPath = path.resolve("./src/data/news.csv");
const fileContent = fs.readFileSync(csvPath);

const rawNews = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  trim: true,
});

export const news = rawNews.filter((item: any) => item.slug);