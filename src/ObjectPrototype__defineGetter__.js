/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.__defineGetter__>) => ReturnType<typeof Object.prototype.__defineGetter__>} */
const ObjectPrototype__defineGetter__ = Object.call.bind(
  Object.prototype.__defineGetter__
);
module.exports = ObjectPrototype__defineGetter__;
