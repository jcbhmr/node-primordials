import { ArrayPrototypeSymbolIterator } from "./Array.js";
import { createSafeIterator, uncurryThis } from "./util.js";

const ArrayIterator = {
  prototype: Reflect.getPrototypeOf(
    Array.prototype[Symbol.iterator]()
  ) as IterableIterator<unknown>,
};

export default ArrayIterator;
export const ArrayIteratorPrototype = ArrayIterator.prototype;
export const ArrayIteratorPrototypeNext = uncurryThis(
  ArrayIteratorPrototype.next
);
export const ArrayIteratorPrototypeSymbolToStringTag =
  ArrayIteratorPrototype[Symbol.toStringTag];

export const SafeArrayIterator = createSafeIterator(
  ArrayPrototypeSymbolIterator,
  ArrayIteratorPrototypeNext
);
