"use strict";
const makeSafe = require("./makeSafe.js");
const SafeFinalizationRegistry = makeSafe(
  FinalizationRegistry,
  class SafeFinalizationRegistry extends FinalizationRegistry {
    // eslint-disable-next-line no-useless-constructor
    constructor(cleanupCallback) {
      super(cleanupCallback);
    }
  }
);
export = SafeFinalizationRegistry;
