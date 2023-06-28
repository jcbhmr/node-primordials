import test from "node:test";
import assert from "node:assert";
import * as index from "../src/index.js";
import fsPromises from "node:fs/promises";

const nativeNames = (await fsPromises.readFile("tools/primordials.txt", "utf8"))
  .trim()
  .split(/\r?\n/g);

for (const name of nativeNames) {
  test(`default has ${name}`, () => {
    // @ts-ignore
    assert(name in index.default);
  });
}

for (const name of nativeNames) {
  test(`named has ${name}`, () => {
    assert(name in index);
  });
}
