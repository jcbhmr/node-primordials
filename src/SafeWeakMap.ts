import makeSafe from "./makeSafe.js";

const SafeWeakMap = makeSafe(
  WeakMap,

  class SafeWeakMap extends WeakMap {
    constructor(i) {
      super(i);
    } // eslint-disable-line no-useless-constructor
  }
);
export = SafeWeakMap;
