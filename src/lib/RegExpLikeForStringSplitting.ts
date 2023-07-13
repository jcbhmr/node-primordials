// @ts-ignore
import RegExpPrototype from "../RegExpPrototype.js";
// @ts-ignore
import ReflectConstruct from "../ReflectConstruct.js";
// @ts-ignore
import ReflectGet from "../ReflectGet.js";
// @ts-ignore
import ReflectSet from "../ReflectSet.js";
// @ts-ignore
import ReflectApply from "../ReflectApply.js";
// @ts-ignore
import ObjectSetPrototypeOf from "../ObjectSetPrototypeOf.js";

const { exec: OriginalRegExpPrototypeExec } = RegExpPrototype;

class RegExpLikeForStringSplitting {
  #regex: RegExp;
  constructor() {
    this.#regex = ReflectConstruct(RegExp, arguments);
  }
  get lastIndex() {
    return ReflectGet(this.#regex, "lastIndex");
  }
  set lastIndex(value) {
    ReflectSet(this.#regex, "lastIndex", value);
  }
  exec() {
    return ReflectApply(OriginalRegExpPrototypeExec, this.#regex, arguments);
  }
}
ObjectSetPrototypeOf(RegExpLikeForStringSplitting.prototype, null);
export = RegExpLikeForStringSplitting;
