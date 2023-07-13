"use strict";
const Promise = require("./Promise.js");
const SafePromise = require("./lib/SafePromise.js");
const arrayToSafePromiseIterable = require("./lib/arrayToSafePromiseIterable.js");
/**
 * @template T,U
 * @param {Array<T|PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<Awaited<U>>}
 */
const SafePromiseRace = (promises, mapFn) =>
  // Wrapping on a new Promise is necessary to not expose the SafePromise
  // prototype to user-land.
  new Promise((a, b) =>
    SafePromise.race(arrayToSafePromiseIterable(promises, mapFn)).then(a, b)
  );
export = SafePromiseRace;
