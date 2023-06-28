import primordials_ = require("./index.js");

declare global {
  var primordials: typeof primordials_;
}

globalThis.primordials = primordials_;
