/** @typedef {Iterator<any>} ArrayIterator */
const ArrayIterator = {
  /** @type {ArrayIterator} */
  prototype: Object.getPrototypeOf([][Symbol.iterator]()),
};
module.exports = ArrayIterator;
