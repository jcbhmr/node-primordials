/** @type {(that: Object) => typeof Object.prototype.__proto__} */
const ObjectPrototypeGet__proto__ = Object.call.bind(
  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get
);
module.exports = ObjectPrototypeGet__proto__;
