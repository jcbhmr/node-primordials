// @ts-ignore
import StringPrototypeSymbolIterator from "./StringPrototypeSymbolIterator.js";
// @ts-ignore
import StringIteratorPrototypeNext from "./StringIteratorPrototypeNext.js";

import createSafeIterator from "./lib/createSafeIterator.js";

const SafeStringIterator = createSafeIterator(
  StringPrototypeSymbolIterator,

  StringIteratorPrototypeNext
);
export = SafeStringIterator;
