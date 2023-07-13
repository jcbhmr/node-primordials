// @ts-ignore
import ObjectDefineProperties from "./ObjectDefineProperties.js";
// @ts-ignore
import SymbolMatch from "./SymbolMatch.js";
// @ts-ignore
import SymbolMatchAll from "./SymbolMatchAll.js";
// @ts-ignore
import SymbolReplace from "./SymbolReplace.js";
// @ts-ignore
import SymbolSearch from "./SymbolSearch.js";
// @ts-ignore
import SymbolSplit from "./SymbolSplit.js";
// @ts-ignore
import SymbolSpecies from "./SymbolSpecies.js";
// @ts-ignore
import RegExpPrototype from "./RegExpPrototype.js";
// @ts-ignore
import RegExpPrototypeGetDotAll from "./RegExpPrototypeGetDotAll.js";
// @ts-ignore
import RegExpPrototypeGetGlobal from "./RegExpPrototypeGetGlobal.js";
// @ts-ignore
import RegExpPrototypeGetHasIndices from "./RegExpPrototypeGetHasIndices.js";
// @ts-ignore
import RegExpPrototypeGetIgnoreCase from "./RegExpPrototypeGetIgnoreCase.js";
// @ts-ignore
import RegExpPrototypeGetMultiline from "./RegExpPrototypeGetMultiline.js";
// @ts-ignore
import RegExpPrototypeGetSource from "./RegExpPrototypeGetSource.js";
// @ts-ignore
import RegExpPrototypeGetSticky from "./RegExpPrototypeGetSticky.js";
// @ts-ignore
import RegExpPrototypeGetUnicode from "./RegExpPrototypeGetUnicode.js";
// @ts-ignore
import RegExpPrototypeGetFlags from "./RegExpPrototypeGetFlags.js";

import RegExpLikeForStringSplitting from "./lib/RegExpLikeForStringSplitting.js";

const {
  exec: OriginalRegExpPrototypeExec,
  [SymbolMatch]: OriginalRegExpPrototypeSymbolMatch,
  [SymbolMatchAll]: OriginalRegExpPrototypeSymbolMatchAll,
  [SymbolReplace]: OriginalRegExpPrototypeSymbolReplace,
  [SymbolSearch]: OriginalRegExpPrototypeSymbolSearch,
  [SymbolSplit]: OriginalRegExpPrototypeSymbolSplit,
} = RegExpPrototype;

function hardenRegExp(pattern: RegExp): RegExp {
  ObjectDefineProperties(pattern, {
    [SymbolMatch]: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeSymbolMatch,
    },
    [SymbolMatchAll]: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeSymbolMatchAll,
    },
    [SymbolReplace]: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeSymbolReplace,
    },
    [SymbolSearch]: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeSymbolSearch,
    },
    [SymbolSplit]: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeSymbolSplit,
    },
    constructor: {
      __proto__: null,
      configurable: true,
      value: {
        [SymbolSpecies]: RegExpLikeForStringSplitting,
      },
    },
    dotAll: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetDotAll(pattern),
    },
    exec: {
      __proto__: null,
      configurable: true,
      value: OriginalRegExpPrototypeExec,
    },
    global: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetGlobal(pattern),
    },
    hasIndices: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetHasIndices(pattern),
    },
    ignoreCase: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetIgnoreCase(pattern),
    },
    multiline: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetMultiline(pattern),
    },
    source: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetSource(pattern),
    },
    sticky: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetSticky(pattern),
    },
    unicode: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetUnicode(pattern),
    },
    flags: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetFlags(pattern),
    },
  });
  return pattern;
}
export = hardenRegExp;
