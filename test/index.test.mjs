import test from "node:test";
import assert from "node:assert";
import getAllPrimordialNames from "../tools/getAllPrimordialNames.mjs";
import { escapeNodePrimitiveName } from "../tools/util.mjs";

const primordialNames = await getAllPrimordialNames();
console.debug("primordialNames.length", primordialNames.length);

for (const name of primordialNames) {
  test(`exports ${name}`, async () => {
    const index = await import("../dist/index-node.js");
    assert(name in index, `missing ${name}`);
  });
}
test(`default export is primordials`, async () => {
  const { default: primordials } = await import("../dist/index-node.js");
  assert.equal(Object.getPrototypeOf(primordials), null);
  assert(Object.isFrozen(primordials));
});

for (const name of primordialNames) {
  const escapedName = escapeNodePrimitiveName(name);
  test(`file ${escapedName}.js importable`, async () => {
    await import(`../dist/${escapedName}.js`);
  });
}

test(`file polyfill.js importable`, async () => {
  await import("../dist/polyfill.js");
});
test(`polyfill.js provides globalThis.primordials`, async () => {
  await import("../dist/polyfill.js");
  assert(globalThis.primordials);
});
