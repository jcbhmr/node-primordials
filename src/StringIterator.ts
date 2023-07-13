const StringIterator = {
  prototype: Object.getPrototypeOf(String.prototype[Symbol.iterator]()),
};
export = StringIterator;
