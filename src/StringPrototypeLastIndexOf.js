/** @type {(that: String, ...a: Parameters<typeof String.prototype.lastIndexOf>) => ReturnType<typeof String.prototype.lastIndexOf>} */
const StringPrototypeLastIndexOf = Object.call.bind(
  String.prototype.lastIndexOf
);
module.exports = StringPrototypeLastIndexOf;
