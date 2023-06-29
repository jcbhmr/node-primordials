/** @type {(that: Object, v: typeof Object.prototype.__proto__) => void} */
const ObjectPrototypeSet__proto__ = Object.call.bind(
  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set
);
module.exports = ObjectPrototypeSet__proto__;
