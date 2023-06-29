/** @type {(that: Object, ...a: Parameters<typeof Object.prototype.__defineSetter__>) => ReturnType<typeof Object.prototype.__defineSetter__>} */
const ObjectPrototype__defineSetter__ = Object.call.bind(
  Object.prototype.__defineSetter__
);
module.exports = ObjectPrototype__defineSetter__;
