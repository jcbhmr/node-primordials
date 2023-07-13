"use strict";
const ObjectSetPrototypeOf = require("../ObjectSetPrototypeOf.js");
const SymbolIterator = require("../SymbolIterator.js");
const ObjectFreeze = require("../ObjectFreeze.js");
/**
 * Creates a class that can be safely iterated over.
 *
 * Because these functions are used by makeSafe, which is exposed on the
 * primordials object, it's important to use const references to the
 * primordials that they use.
 * @template {Iterable} T
 * @template {*} TReturn
 * @template {*} TNext
 * @param {(self: T) => IterableIterator<T>} factory
 * @param {(...args: [] | [TNext]) => IteratorResult<T, TReturn>} next
 * @returns {Iterator<T, TReturn, TNext>}
 */
const createSafeIterator = (factory, next) => {
  class SafeIterator {
    constructor(iterable) {
      this._iterator = factory(iterable);
    }
    next() {
      return next(this._iterator);
    }
    [SymbolIterator]() {
      return this;
    }
  }
  ObjectSetPrototypeOf(SafeIterator.prototype, null);
  ObjectFreeze(SafeIterator.prototype);
  ObjectFreeze(SafeIterator);

  return SafeIterator;
};
export = createSafeIterator;
