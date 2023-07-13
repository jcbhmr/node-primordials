import makeSafe from "./makeSafe.js";

const SafeWeakRef = makeSafe(
  WeakRef,
  class SafeWeakRef extends WeakRef<any> {
    // eslint-disable-next-line no-useless-constructor
    constructor(target) {
      super(target);
    }
  }
);
export = SafeWeakRef;
