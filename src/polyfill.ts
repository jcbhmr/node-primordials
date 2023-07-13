declare global {
  // @ts-ignore
  var primordials: typeof import("./index-default.js");
}

if (typeof primordials === "undefined") {
  const primordials_ = require("#index.js");
  globalThis.primordials = primordials_;
}
