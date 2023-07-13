import makeSafe from "../makeSafe.js";

const SafePromise = makeSafe(
  Promise,
  class SafePromise extends Promise<any> {
    // eslint-disable-next-line no-useless-constructor
    constructor(executor) {
      super(executor);
    }
  }
);
export = SafePromise;
