// Roast Your Own Agent — make.fun one-liner entry.
// The program writes a single roast line to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const roast =
  "My agent apologized for the error, then confidently fixed it by making the exact same error in a different file.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, roast, "utf8");
console.log(`Roast written (${roast.length} chars) -> ${target}`);
