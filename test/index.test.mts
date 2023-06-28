import test from "node:test";
import assert from "node:assert";
import fsPromises from "node:fs/promises";
import * as index from "../src/index.js";

const primordialsNames = (await fsPromises.readFile("primordials.txt", "utf8"))
  .trim()
  .split(/\r?\n/g);

for (const name of primordialsNames) {
  test(`default has ${name}`, () => {
    // @ts-ignore
    assert(name in index.default);
  });
}

for (const name of primordialsNames) {
  test(`named has ${name}`, () => {
    assert(name in index);
  });
}
