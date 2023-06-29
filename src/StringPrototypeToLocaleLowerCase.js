/** @type {(this: String, ...a: Parameters<typeof String.prototype.toLocaleLowerCase>) => ReturnType<typeof String.prototype.toLocaleLowerCase>} */
const StringPrototypeToLocaleLowerCase = Object.call.bind(
  String.prototype.toLocaleLowerCase
);
module.exports = StringPrototypeToLocaleLowerCase;
