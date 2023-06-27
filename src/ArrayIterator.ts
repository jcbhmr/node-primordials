import { uncurryThis } from "./uncurryThis.js";
import { createSafeIterator } from "./createSafeIterator.js";

export const ArrayIterator = {
  prototype: Object.getPrototypeOf(
    Array.prototype[Symbol.iterator]()
  ) as IterableIterator<unknown>,
};
export const ArrayIteratorPrototype = ArrayIterator.prototype;
export const ArrayIteratorPrototypeNext = uncurryThis(
  ArrayIteratorPrototype.next
);
export const ArrayIteratorPrototypeSymbolToStringTag =
  ArrayIteratorPrototype[Symbol.toStringTag];

export const SafeArrayIterator = createSafeIterator(
  uncurryThis(Array.prototype[Symbol.iterator]),
  ArrayIteratorPrototypeNext
);
