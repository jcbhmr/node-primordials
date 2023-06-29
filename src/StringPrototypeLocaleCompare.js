/** @type {(this: String, ...a: Parameters<typeof String.prototype.localeCompare>) => ReturnType<typeof String.prototype.localeCompare>} */
const StringPrototypeLocaleCompare = Object.call.bind(
  String.prototype.localeCompare
);
module.exports = StringPrototypeLocaleCompare;
