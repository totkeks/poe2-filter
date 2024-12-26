import { readFileSync } from "fs";
import * as path from "path";
import { parse } from "./parser";

// Read the example filter file
const filePath = path.join(__dirname, "example.filter");
const filterContent = readFileSync(filePath, "utf-8");

// Parse the filter content
try {
	const parsedFilter = parse(filterContent);
	console.log("Parsed Filter:", JSON.stringify(parsedFilter, null, 2));
} catch (error) {
	console.error("Error parsing filter:", error);
}
