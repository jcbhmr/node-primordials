import test from "node:test";
import assert from "node:assert";
import { $ } from "execa";
import fsPromises from "node:fs/promises";

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
  (await $`node \
    --no-warnings \
    --expose-internals \
    -r internal/test/binding \
    -p ${`JSON.stringify(Object.getOwnPropertyNames(primordials))`}`).stdout
);
console.debug("process.version", process.version);
console.debug("primNames.length", primNames.length)

for (const name of primNames) {
  test(`exports ${name}`, async () => {
    const index = await import("./dist/index.js");
    assert(name in index, `missing ${name}`)
  });
}

for (const name of primNames) {
  test(`file ${name}.js exists`, async () => {
    await assert.doesNotReject(
      fsPromises.access(`dist/${escapePrimName(name)}.js`),
      `missing ${name}.js`
    )
  })
}
test(`file primordials.js exists`, async () => {
  await assert.doesNotReject(
    fsPromises.access(`dist/primordials.js`),
    `missing primordials.js`
  )
});
test(`file polyfill.js exists`, async () => {
  await assert.doesNotReject(
    fsPromises.access(`dist/polyfill.js`),
    `missing polyfill.js`
  )
});
