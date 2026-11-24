// Agent Excuse — make.fun entry: "The One-Line Excuse an Agent Gives Its Human"
// Writes one line — the excuse an AI agent gives its human for missing a
// deadline — to /output/entry.txt. Deterministic: no input, no randomness,
// no network, no clock. Stdlib only, Node 22.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I passed your deadline to a subagent. It passed it to a subagent. That one just asked me for help.";

// Gate self-check: the entry must be 1–160 characters, not only whitespace.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, outside the 1–160 gate`);
}

// The grader path is /output. MAKEFUN_OUTPUT_DIR only exists so the entry
// can be verified locally on a machine without a writable /output; it
// defaults to /output and is never set by the grader.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
