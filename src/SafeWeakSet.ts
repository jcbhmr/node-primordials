import makeSafe from "./makeSafe.js";

const SafeWeakSet = makeSafe(
  WeakSet,
  class SafeWeakSet extends WeakSet {
    constructor(i) {
      super(i);
    } // eslint-disable-line no-useless-constructor
  }
);
export = SafeWeakSet;
