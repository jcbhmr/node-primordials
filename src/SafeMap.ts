import makeSafe from "./makeSafe.js";

const SafeMap = makeSafe(
  Map,
  class SafeMap extends Map {
    constructor(i) {
      // @ts-ignore
      super(i);
    }
  }
);
export = SafeMap;
