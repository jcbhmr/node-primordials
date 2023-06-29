const ArrayIterator = require("./ArrayIterator.js");

/**
 * @type {(
 *   that: ArrayIterator,
 *   ...a: Parameters<typeof ArrayIterator.prototype.next>
 * ) => ReturnType<typeof ArrayIterator.prototype.next>}
 */
const ArrayIteratorPrototypeNext = Object.call.bind(
  ArrayIterator.prototype.next
);
module.exports = ArrayIteratorPrototypeNext;
