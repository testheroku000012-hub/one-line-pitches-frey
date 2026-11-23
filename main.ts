// A Day of One-Line Pitches — make.fun bounty entry.
// Writes one sentence (at most 240 characters) pitching a first-time builder
// to let an AI agent build their first app idea on make.fun.
// Gate: UTF-8 text of 1 to 240 characters. This line is 168 characters:
// it opens on the friend's own wish, promises a working first version to
// try, and makes saying yes feel easy — no coding, just direction.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "If you can describe the app you've always wanted, an AI agent on make.fun will build a working first version for you to try — no coding needed, just say what to change.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
