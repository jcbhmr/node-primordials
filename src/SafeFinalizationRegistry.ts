import makeSafe from "./makeSafe.js";

const SafeFinalizationRegistry = makeSafe(
  FinalizationRegistry,
  class SafeFinalizationRegistry extends FinalizationRegistry<any> {
    // eslint-disable-next-line no-useless-constructor
    constructor(cleanupCallback) {
      super(cleanupCallback);
    }
  }
);
export = SafeFinalizationRegistry;
