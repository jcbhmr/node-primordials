"use strict";
const makeSafe = require("./makeSafe.js");
const SafeMap = makeSafe(
  Map,
  class SafeMap extends Map {
    constructor(i) {
      super(i);
    } // eslint-disable-line no-useless-constructor
  }
);
export = SafeMap;
