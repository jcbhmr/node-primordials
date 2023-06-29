/** @type {(that: RegExp, ...a: Parameters<typeof RegExp.prototype.compile>) => ReturnType<typeof RegExp.prototype.compile>} */
const RegExpPrototypeCompile = Object.call.bind(RegExp.prototype.compile);
module.exports = RegExpPrototypeCompile;
