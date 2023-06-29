/** @type {(that: SyntaxError, ...a: Parameters<typeof SyntaxError.prototype.name>) => ReturnType<typeof SyntaxError.prototype.name>} */
const SyntaxErrorPrototypeName = Object.call.bind(SyntaxError.prototype.name);
module.exports = SyntaxErrorPrototypeName;
