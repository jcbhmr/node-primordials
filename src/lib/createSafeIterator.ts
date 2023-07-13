// @ts-ignore
import ObjectSetPrototypeOf from "../ObjectSetPrototypeOf.js";
// @ts-ignore
import SymbolIterator from "../SymbolIterator.js";
// @ts-ignore
import ObjectFreeze from "../ObjectFreeze.js";

/**
 * Creates a class that can be safely iterated over.
 *
 * Because these functions are used by makeSafe, which is exposed on the
 * primordials object, it's important to use const references to the
 * primordials that they use.
 */
function createSafeIterator<T, TReturn, TNext>(factory, next) {
  class SafeIterator {
    private _iterator: Iterator<T, TReturn, TNext>;
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
}
export = createSafeIterator;
