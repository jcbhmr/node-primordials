#!/usr/bin/env node
import fsPromises from "node:fs/promises";
import { $ } from "execa";

/**
 * @param {string | symbol} key
 * @returns {string}
 */
function unwrapKey(key) {
  return typeof key === "symbol" ? camelCaseParts(key.description.split(".")) : key;
}

/**
 * @param {string[]} parts
 * @returns {string}
 */
function camelCaseParts(parts) {
  let camelCase = (parts[0]);
  for (const part of parts.slice(1)) {
    camelCase += part[0].toUpperCase();
    camelCase += part.slice(1);
  }
  return camelCase;
}

/**
 * @param {string} primName
 * @returns {string}
 */
function escapePrimName(primName) {
  return primName
    .replaceAll("&", "amp")
    .replaceAll("+", "plus")
    .replaceAll("'", "apos")
    .replaceAll("`", "grave");
}

/**
 * @param {string | symbol} key
 * @returns {string}
 */
function getPropExpr(key) {
  if (typeof key === "symbol") {
    return `[${key.description}]`;
  } else if (/^[\w$]+$/.test(key)) {
    return "." + key;
  } else  {
    return `[${JSON.stringify(key)}]`
  }
}

var js = `
  const ObjectDefineProperties = require("./ObjectDefineProperties.js");
  const SymbolMatch = require("./SymbolMatch.js");
  const SymbolMatchAll = require("./SymbolMatchAll.js");
  const SymbolReplace = require("./SymbolReplace.js");
  const SymbolSplit = require("./SymbolSplit.js");
  const SymbolSpecies = require("./SymbolSpecies.js");

  const OriginalRegExpPrototypeSymbolMatch = RegExpPrototype[SymbolMatch];
  const OriginalRegExpPrototypeSymbolMatchAll = RegExp.prototype[SymbolMatchAll];
  const OriginalRegExpPrototypeSymbolReplace = RegExp.prototype[SymbolReplace];
  const OriginalRegExpPrototypeSymbolSplit = RegExp.prototype[SymbolSplit];

  class RegExpLikeForStringSplitting {
    #regex;
    constructor() {
      this.#regex = ReflectConstruct(RegExp, arguments);
    }

    get lastIndex() {
      return ReflectGet(this.#regex, 'lastIndex');
    }
    set lastIndex(value) {
      ReflectSet(this.#regex, 'lastIndex', value);
    }

    exec() {
      return ReflectApply(OriginalRegExpPrototypeExec, this.#regex, arguments);
    }
  }
  Object.setPrototypeOf(RegExpLikeForStringSplitting.prototype, null);

  /**
   * @param {RegExp} pattern
   * @returns {RegExp}
   */
  function hardenRegExp(pattern) {
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
    });
    ObjectDefineProperty(pattern, 'flags', {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetFlags(pattern),
    });
    return pattern;
  };
`

var js = `
  "use strict";
  const RegExpPrototypeExec = require("./RegExpPrototypeExec.js");

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
  module.exports = SafeStringPrototypeSearch;
`;
await fsPromises.writeFile("dist/SafeStringPrototypeSearch.js", js);
console.debug("wrote SafeStringPrototypeSearch.js");

/** @type {string[]} */
const primNames = JSON.parse(
  await $`node \
    --no-warnings \
    --expose-internals \
    -r internal/test/binding \
    -p 'JSON.stringify(Reflect.ownKeys(primordials).sort())'`
);
console.debug("primNames", primNames);

var js = `"use strict";`;
for (const primName of primNames) {
  const fileName = escapePrimName(primName);
  js += `exports["${primName}"] = require("./${fileName}");`;
}
await fsPromises.writeFile("dist/index.js", js);
console.debug("wrote index.js");

console.debug("running tsc...");
await $({ cwd: "dist" })`npx tsc --noEmit`;
console.info("tsc succeeded");
