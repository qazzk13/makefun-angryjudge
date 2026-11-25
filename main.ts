process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const rant =
  "The office printer has exactly one job and it still can't do it. It eats page two, blinks an error code that means nothing to anyone alive, then cheerfully prints all twelve pages at 4:59 pm, right as I'm walking out the door. I don't want a smarter printer. I want one that stops pretending and admits it's a paperweight with a power cord.";

if (rant.length < 1 || rant.length > 400) {
  throw new Error(`rant must be 1-400 characters, got ${rant.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), rant, "utf8");
console.log(`wrote entry.txt (${rant.length} characters)`);
