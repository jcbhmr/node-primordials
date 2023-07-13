"use strict";
const makeSafe = require("./makeSafe.js");
const SafeSet = makeSafe(
  Set,
  class SafeSet extends Set {
    constructor(i) {
      super(i);
    } // eslint-disable-line no-useless-constructor
  }
);
export = SafeSet;
