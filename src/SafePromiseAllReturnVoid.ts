// @ts-ignore
import PromisePrototypeThen from "./PromisePrototypeThen.js";
import PromiseResolve from "./PromiseResolve.js";

/**
 * Should only be used when we only care about waiting for all the promises to
 * resolve, not what value they resolve to.
 * @template T,U
 * @param {ArrayLike<T | PromiseLike<T>>} promises
 * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
 * @returns {Promise<void>}
 */
const SafePromiseAllReturnVoid = (promises, mapFn) =>
  new Promise((resolve, reject) => {
    let pendingPromises = promises.length;
    // @ts-ignore
    if (pendingPromises === 0) resolve();
    for (let i = 0; i < promises.length; i++) {
      const promise = mapFn != null ? mapFn(promises[i], i) : promises[i];
      PromisePrototypeThen(
        PromiseResolve(promise),
        () => {
          // @ts-ignore
          if (--pendingPromises === 0) resolve();
        },
        reject
      );
    }
  });
export = SafePromiseAllReturnVoid;
