import { StringPrototypeSymbolIterator } from "./String.js";
import { createSafeIterator, uncurryThis } from "./util.js";

const StringIterator = {
  prototype: Reflect.getPrototypeOf(
    String.prototype[Symbol.iterator]()
  ) as IterableIterator<string>,
};

export default StringIterator;
export const StringIteratorPrototype = StringIterator.prototype;
export const StringIteratorPrototypeNext = uncurryThis(
  StringIteratorPrototype.next
);
export const StringIteratorPrototypeSymbolToStringTag =
  StringIteratorPrototype[Symbol.toStringTag];

export const SafeStringIterator = createSafeIterator(
  StringPrototypeSymbolIterator,
  StringIteratorPrototypeNext
);
