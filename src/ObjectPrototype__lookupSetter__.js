/** @type {(this: Object, ...a: Parameters<typeof Object.prototype.__lookupSetter__>) => ReturnType<typeof Object.prototype.__lookupSetter__>} */
const ObjectPrototype__lookupSetter__ = Object.call.bind(
  Object.prototype.__lookupSetter__
);
module.exports = ObjectPrototype__lookupSetter__;
