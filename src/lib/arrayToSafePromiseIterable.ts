// @ts-ignore
import SafeArrayIterator from "../SafeArrayIterator.js";
// @ts-ignore
import ArrayPrototypeMap from "../ArrayPrototypeMap.js";
// @ts-ignore
import PromisePrototypeThen from "../PromisePrototypeThen.js";

import SafePromise from "./SafePromise.js";

const arrayToSafePromiseIterable = (promises, mapFn) =>
  new SafeArrayIterator(
    ArrayPrototypeMap(
      promises,
      (promise, i) =>
        new SafePromise((a, b) =>
          PromisePrototypeThen(
            mapFn == null ? promise : mapFn(promise, i),
            a,
            b
          )
        )
    )
  );
export = arrayToSafePromiseIterable;
