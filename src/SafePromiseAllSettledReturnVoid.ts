"use strict";
const SafePromiseAllSettled = require("./SafePromiseAllSettled.js");
/**
 * Should only be used when we only care about waiting for all the promises to
 * settle, not what value they resolve or reject to.
 * @template T,U
 * @param {ArrayLike<T|PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<void>}
 */
const SafePromiseAllSettledReturnVoid = async (promises, mapFn) => {
  await SafePromiseAllSettled(promises, mapFn);
};
export = SafePromiseAllSettledReturnVoid;
