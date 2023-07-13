"use strict";
const SafeArrayIterator = require("../SafeArrayIterator.js");
const ArrayPrototypeMap = require("../ArrayPrototypeMap.js");
const SafePromise = require("./SafePromise.js");
const PromisePrototypeThen = require("../PromisePrototypeThen.js");

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
