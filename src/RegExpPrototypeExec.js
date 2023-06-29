/** @type {(this: RegExp, ...a: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
const RegExpPrototypeExec = Object.call.bind(RegExp.prototype.exec);
module.exports = RegExpPrototypeExec;
