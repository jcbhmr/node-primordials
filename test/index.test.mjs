import test from "node:test";
import assert from "node:assert";
import * as index from "../index.js";
import { $ } from "execa";

/** @type {string[]} */
const primNames = JSON.parse(
  (await $`node \
    --no-warnings \
    --expose-internals \
    -r internal/test/binding \
    -p ${`JSON.stringify(Object.getOwnPropertyNames(primordials))`}`).stdout
);
console.debug(`Node.js ${process.version}`, "primNames", primNames);

for (const name of primNames) {
  test(`exports ${name}`, () => {
    assert(name in index, `missing ${name}`)
  });
}
