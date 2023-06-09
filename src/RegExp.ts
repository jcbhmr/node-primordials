import { uncurryThis } from "./util.js";

export default RegExp;
export const RegExpLength = RegExp.length;
export const RegExpName = RegExp.name;
export const RegExpPrototype = RegExp.prototype;
export const RegExpGetInput = Object.getOwnPropertyDescriptor(RegExp, "input")!
  .get!;
export const RegExpSetInput = Object.getOwnPropertyDescriptor(RegExp, "input")!
  .set!;
export const RegExpGet$_ = Object.getOwnPropertyDescriptor(RegExp, "$_")!.get!;
export const RegExpSet$_ = Object.getOwnPropertyDescriptor(RegExp, "$_")!.set!;
export const RegExpGetLastMatch = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastMatch"
)!.get!;
export const RegExpSetLastMatch = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastMatch"
)!.set!;
const RegExpGet$amp = Object.getOwnPropertyDescriptor(RegExp, "$&")!.get!;
// export { RegExpGet$amp as "RegExpGet$&" }
export { RegExpGet$amp };
const RegExpSet$amp = Object.getOwnPropertyDescriptor(RegExp, "$&")!.set!;
// export { RegExpSet$amp as "RegExpSet$&" }
export { RegExpSet$amp };
export const RegExpGetLastParen = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastParen"
)!.get!;
export const RegExpSetLastParen = Object.getOwnPropertyDescriptor(
  RegExp,
  "lastParen"
)!.set!;
const RegExpGet$plus = Object.getOwnPropertyDescriptor(RegExp, "$+")!.get!;
// export { RegExpGet$plus as "RegExpGet$+" }
export { RegExpGet$plus };
const RegExpSet$plus = Object.getOwnPropertyDescriptor(RegExp, "$+")!.set!;
// export { RegExpSet$plus as "RegExpSet$+" }
export { RegExpSet$plus };
export const RegExpGetLeftContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "leftContext"
)!.get!;
export const RegExpSetLeftContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "leftContext"
)!.set!;
const RegExpGet$backtick = Object.getOwnPropertyDescriptor(RegExp, "$`")!.get!;
// export { RegExpGet$backtick as "RegExpGet$`" }
export { RegExpGet$backtick };
const RegExpSet$backtick = Object.getOwnPropertyDescriptor(RegExp, "$`")!.set!;
// export { RegExpSet$backtick as "RegExpSet$`" }
export { RegExpSet$backtick };
export const RegExpGetRightContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "rightContext"
)!.get!;
export const RegExpSetRightContext = Object.getOwnPropertyDescriptor(
  RegExp,
  "rightContext"
)!.set!;
const RegExpGet$apos = Object.getOwnPropertyDescriptor(RegExp, "$'")!.get!;
// export { RegExpGet$apos as "RegExpGet$'" }
export { RegExpGet$apos };
const RegExpSet$apos = Object.getOwnPropertyDescriptor(RegExp, "$'")!.set!;
// export { RegExpSet$apos as "RegExpSet$'" }
export { RegExpSet$apos };
export const RegExpGet$1 = Object.getOwnPropertyDescriptor(RegExp, "$1")!.get!;
export const RegExpSet$1 = Object.getOwnPropertyDescriptor(RegExp, "$1")!.set!;
export const RegExpGet$2 = Object.getOwnPropertyDescriptor(RegExp, "$2")!.get!;
export const RegExpSet$2 = Object.getOwnPropertyDescriptor(RegExp, "$2")!.set!;
export const RegExpGet$3 = Object.getOwnPropertyDescriptor(RegExp, "$3")!.get!;
export const RegExpSet$3 = Object.getOwnPropertyDescriptor(RegExp, "$3")!.set!;
export const RegExpGet$4 = Object.getOwnPropertyDescriptor(RegExp, "$4")!.get!;
export const RegExpSet$4 = Object.getOwnPropertyDescriptor(RegExp, "$4")!.set!;
export const RegExpGet$5 = Object.getOwnPropertyDescriptor(RegExp, "$5")!.get!;
export const RegExpSet$5 = Object.getOwnPropertyDescriptor(RegExp, "$5")!.set!;
export const RegExpGet$6 = Object.getOwnPropertyDescriptor(RegExp, "$6")!.get!;
export const RegExpSet$6 = Object.getOwnPropertyDescriptor(RegExp, "$6")!.set!;
export const RegExpGet$7 = Object.getOwnPropertyDescriptor(RegExp, "$7")!.get!;
export const RegExpSet$7 = Object.getOwnPropertyDescriptor(RegExp, "$7")!.set!;
export const RegExpGet$8 = Object.getOwnPropertyDescriptor(RegExp, "$8")!.get!;
export const RegExpSet$8 = Object.getOwnPropertyDescriptor(RegExp, "$8")!.set!;
export const RegExpGet$9 = Object.getOwnPropertyDescriptor(RegExp, "$9")!.get!;
export const RegExpSet$9 = Object.getOwnPropertyDescriptor(RegExp, "$9")!.set!;
export const RegExpGetSymbolSpecies = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp, Symbol.species)!.get!
);
export const RegExpPrototypeConstructor = RegExp.prototype.constructor;
export const RegExpPrototypeExec = uncurryThis(RegExp.prototype.exec);
export const RegExpPrototypeGetDotAll = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "dotAll")!.get!
);
export const RegExpPrototypeGetFlags = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "flags")!.get!
);
export const RegExpPrototypeGetGlobal = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "global")!.get!
);
export const RegExpPrototypeGetHasIndices = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "hasIndices")!.get!
);
export const RegExpPrototypeGetIgnoreCase = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "ignoreCase")!.get!
);
export const RegExpPrototypeGetMultiline = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "multiline")!.get!
);
export const RegExpPrototypeGetSource = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "source")!.get!
);
export const RegExpPrototypeGetSticky = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "sticky")!.get!
);
export const RegExpPrototypeGetUnicode = uncurryThis(
  Object.getOwnPropertyDescriptor(RegExp.prototype, "unicode")!.get!
);
export const RegExpPrototypeCompile = uncurryThis(RegExp.prototype.compile);
export const RegExpPrototypeToString = uncurryThis(RegExp.prototype.toString);
export const RegExpPrototypeTest = uncurryThis(RegExp.prototype.test);
export const RegExpPrototypeSymbolMatch = uncurryThis(
  RegExp.prototype[Symbol.match]
);
export const RegExpPrototypeSymbolMatchAll = uncurryThis(
  RegExp.prototype[Symbol.matchAll]
);
export const RegExpPrototypeSymbolReplace = uncurryThis(
  RegExp.prototype[Symbol.replace]
);
export const RegExpPrototypeSymbolSearch = uncurryThis(
  RegExp.prototype[Symbol.search]
);
export const RegExpPrototypeSymbolSplit = uncurryThis(
  RegExp.prototype[Symbol.split]
);
