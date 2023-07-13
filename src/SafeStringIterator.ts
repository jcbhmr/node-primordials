"use strict";
const createSafeIterator = require("./lib/createSafeIterator.js");
const StringPrototypeSymbolIterator = require("./StringPrototypeSymbolIterator.js");
const StringIteratorPrototypeNext = require("./StringIteratorPrototypeNext.js");
const SafeStringIterator = createSafeIterator(
  StringPrototypeSymbolIterator,

  StringIteratorPrototypeNext
);
export = SafeStringIterator;
