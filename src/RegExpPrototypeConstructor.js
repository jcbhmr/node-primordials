/** @type {(that: RegExp, ...a: Parameters<typeof RegExp.prototype.constructor>) => ReturnType<typeof RegExp.prototype.constructor>} */
const RegExpPrototypeConstructor = Object.call.bind(
  RegExp.prototype.constructor
);
module.exports = RegExpPrototypeConstructor;
