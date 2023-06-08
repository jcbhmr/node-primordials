import test from "node:test";
import assert from "node:assert";
import { $ } from "zx";
$.verbose = false;
import * as index from "./index.js";

const nativeNames = (
  await $`NODE_NO_WARNINGS=1 node --expose-internals -r internal/test/binding -p 'Reflect.ownKeys(primordials).join("\\n")'`
)
  .toString()
  .trim()
  .split("\n")
  .sort();

test("has all the right things on the default export", async () => {
  for (const name of nativeNames) {
    await test(`has ${name}`, () => {
      assert(name in index.default, `missing ${name}!`);
    });
  }
});

test("has the appropriate named exports", async () => {
  for (const name of nativeNames) {
    await test(`has ${name}`, () => {
      assert(name in index, `missing ${name}!`);
    });
  }
});
