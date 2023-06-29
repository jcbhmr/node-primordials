/** @type {(this: String, ...a: Parameters<typeof String.prototype.constructor>) => ReturnType<typeof String.prototype.constructor>} */
const StringPrototypeConstructor = Object.call.bind(
  String.prototype.constructor
);
module.exports = StringPrototypeConstructor;
