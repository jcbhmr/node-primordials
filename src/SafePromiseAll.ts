import SafePromise from "./lib/SafePromise.js";
import arrayToSafePromiseIterable from "./lib/arrayToSafePromiseIterable.js";

/**
 * @template T,U
 * @param {Array<T | PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<Awaited<U>[]>}
 */
const SafePromiseAll = (promises, mapFn) =>
  // Wrapping on a new Promise is necessary to not expose the SafePromise
  // prototype to user-land.
  new Promise((a, b) =>
    // @ts-ignore
    SafePromise.all(arrayToSafePromiseIterable(promises, mapFn)).then(a, b)
  );
export = SafePromiseAll;
