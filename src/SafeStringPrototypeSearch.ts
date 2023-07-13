// @ts-ignore
import RegExpPrototypeExec from "./RegExpPrototypeExec.js";

/**
 * @param {string} str
 * @param {RegExp} regexp
 * @returns {number}
 */
const SafeStringPrototypeSearch = (str, regexp) => {
  regexp.lastIndex = 0;
  const match = RegExpPrototypeExec(regexp, str);
  return match ? match.index : -1;
};
export = SafeStringPrototypeSearch;
