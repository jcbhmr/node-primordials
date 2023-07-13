"use strict";
const SafePromise = require("./lib/SafePromise.js");
const arrayToSafePromiseIterable = require("./lib/arrayToSafePromiseIterable.js");
/**
 * @template T,U
 * @param {Array<T|PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<PromiseSettledResult<any>[]>}
 */
const SafePromiseAllSettled = (promises, mapFn) =>
  // Wrapping on a new Promise is necessary to not expose the SafePromise
  // prototype to user-land.
  new Promise((a, b) =>
    SafePromise.allSettled(arrayToSafePromiseIterable(promises, mapFn)).then(
      a,
      b
    )
  );
export = SafePromiseAllSettled;
