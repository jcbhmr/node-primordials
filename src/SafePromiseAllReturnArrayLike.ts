// @ts-ignore
import Promise from "./Promise.js";
// @ts-ignore
import PromiseResolve from "./PromiseResolve.js";
// @ts-ignore
import ObjectSetPrototypeOf from "./ObjectSetPrototypeOf.js";
// @ts-ignore
import ArrayConstructor from "./Array.js";
// @ts-ignore
import PromisePrototypeThen from "./PromisePrototypeThen.js";

/**
 * Should only be used for internal functions, this would produce similar
 * results as Promise.all but without prototype pollution, and the return
 * value is not a genuine Array but an array-like object.
 * @template T,U
 * @param {ArrayLike<T | PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<ArrayLike<Awaited<U>>>}
 */
const SafePromiseAllReturnArrayLike = (promises, mapFn) =>
  new Promise((resolve, reject) => {
    const { length } = promises;

    const returnVal = ArrayConstructor(length);
    ObjectSetPrototypeOf(returnVal, null);
    if (length === 0) resolve(returnVal);

    let pendingPromises = length;
    for (let i = 0; i < length; i++) {
      const promise = mapFn != null ? mapFn(promises[i], i) : promises[i];
      PromisePrototypeThen(
        PromiseResolve(promise),
        (result) => {
          returnVal[i] = result;
          if (--pendingPromises === 0) resolve(returnVal);
        },
        reject
      );
    }
  });
export = SafePromiseAllReturnArrayLike;
