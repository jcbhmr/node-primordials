"use strict";
const makeSafe = require("./makeSafe.js");
const SafeWeakRef = makeSafe(
  WeakRef,
  class SafeWeakRef extends WeakRef {
    // eslint-disable-next-line no-useless-constructor
    constructor(target) {
      super(target);
    }
  }
);
export = SafeWeakRef;
