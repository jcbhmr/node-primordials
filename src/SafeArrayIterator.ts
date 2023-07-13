// @ts-ignore
import ArrayPrototypeSymbolIterator from "./ArrayPrototypeSymbolIterator.js";
// @ts-ignore
import ArrayIteratorPrototypeNext from "./ArrayIteratorPrototypeNext.js";

import createSafeIterator from "./lib/createSafeIterator.js";

const SafeArrayIterator = createSafeIterator(
  ArrayPrototypeSymbolIterator,
  ArrayIteratorPrototypeNext
);
export = SafeArrayIterator;
