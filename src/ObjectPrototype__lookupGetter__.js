/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.__lookupGetter__>) => ReturnType<typeof Object.prototype.__lookupGetter__>} */
const ObjectPrototype__lookupGetter__ = Object.call.bind(
  Object.prototype.__lookupGetter__
);
module.exports = ObjectPrototype__lookupGetter__;
