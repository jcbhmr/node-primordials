import { $ } from "execa";

/** @returns {Promise<string[]>} */
export default async function getAllPrimordialNames() {
  console.debug("process.version", process.version);
  const js = `JSON.stringify(Object.getOwnPropertyNames(primordials))`;
  // prettier-ignore
  const { stdout } = await $`node --no-warnings --expose-internals -r internal/test/binding -p ${js}`
  return JSON.parse(stdout);
}
