"use strict";
const createSafeIterator = require("./lib/createSafeIterator.js");
const ArrayPrototypeSymbolIterator = require("./ArrayPrototypeSymbolIterator.js");
const ArrayIteratorPrototypeNext = require("./ArrayIteratorPrototypeNext.js");
const SafeArrayIterator = createSafeIterator(
  ArrayPrototypeSymbolIterator,

  ArrayIteratorPrototypeNext
);
export = SafeArrayIterator;
