/** @type {(that: RegExp, ...a: Parameters<typeof RegExp.prototype.test>) => ReturnType<typeof RegExp.prototype.test>} */
const RegExpPrototypeTest = Object.call.bind(RegExp.prototype.test);
module.exports = RegExpPrototypeTest;
