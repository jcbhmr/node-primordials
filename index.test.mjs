import test from "node:test";
import assert from "node:assert";
import { $ } from "execa";

/**
 * @param {string} primName
 * @returns {string}
 */
function escapePrimName(primName) {
  return primName
    .replaceAll("&", "amp")
    .replaceAll("+", "plus")
    .replaceAll("'", "apos")
    .replaceAll("`", "grave");
}

/** @type {string[]} */
const primNames = JSON.parse(
  (
    await $`node \
      --no-warnings \
      --expose-internals \
      -r internal/test/binding \
      -p ${`JSON.stringify(Object.getOwnPropertyNames(primordials))`}`
  ).stdout
);
console.debug("process.version", process.version);
console.debug("primNames.length", primNames.length);

for (const name of primNames) {
  test(`exports ${name}`, async () => {
    const index = await import("@nodefill/primordials");
    assert(name in index, `missing ${name}`);
  });
}
test(`default export is primordials`, async () => {
  const { default: primordials } = await import("@nodefill/primordials");
  assert(Object.getPrototypeOf(primordials) == null);
  assert(Object.isFrozen(primordials));
});

for (const name of primNames) {
  test(`file ${name}.js importable`, async () => {
    await import(`@nodefill/primordials/${escapePrimName(name)}.js`);
  });
}

test(`file polyfill.js importable`, async () => {
  await import(`@nodefill/primordials/polyfill.js`);
});
test(`polyfill.js provides globalThis.primordials`, async () => {
  await import(`@nodefill/primordials/polyfill.js`);
  assert(globalThis.primordials);
})
