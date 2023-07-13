const ArrayIterator = {
  prototype: Reflect.getPrototypeOf(
    Array.prototype[Symbol.iterator]()
  ) as Iterator<any>,
};
export = ArrayIterator;
