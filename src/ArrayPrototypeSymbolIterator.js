/**
 * @type {(
 *   that: Array,
 *   ...a: Parameters<(typeof Array.prototype)[typeof Symbol.iterator]>
 * ) => ReturnType<(typeof Array.prototype)[typeof Symbol.iterator]>}
 */
const ArrayPrototypeSymbolIterator = Object.call.bind(
  Array.prototype[Symbol.iterator]
);
module.exports = ArrayPrototypeSymbolIterator;
