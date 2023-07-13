"use strict";
const makeSafe = require("../makeSafe.js");


const SafePromise = makeSafe(
  Promise,
  class SafePromise extends Promise {
    // eslint-disable-next-line no-useless-constructor
    constructor(executor) {
      super(executor);
    }
  }
);
export = SafePromise;
