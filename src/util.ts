





const copyProps = (src, dest) => {
  ArrayPrototypeForEach(ReflectOwnKeys(src), (key) => {
    if (!ReflectGetOwnPropertyDescriptor(dest, key)) {
      ReflectDefineProperty(dest, key, {
        // @ts-ignore
        __proto__: null,
        ...ReflectGetOwnPropertyDescriptor(src, key),
      });
    }
  });
};

export function makeSafe(
  unsafe: { new (...args: any[]): object; prototype: object },
  safe: { new (...args: any[]): object; prototype: object }
) {
  if (SymbolIterator in unsafe.prototype) {
    const dummy = new unsafe();
    let next; // We can reuse the same `next` method.

    ArrayPrototypeForEach(ReflectOwnKeys(unsafe.prototype), (key) => {
      if (!ReflectGetOwnPropertyDescriptor(safe.prototype, key)) {
        const desc = ReflectGetOwnPropertyDescriptor(unsafe.prototype, key)!;
        if (
          typeof desc.value === "function" &&
          desc.value.length === 0 &&
          SymbolIterator in (FunctionPrototypeCall(desc.value, dummy) ?? {})
        ) {
          const createIterator = uncurryThis(desc.value);
          next ??= uncurryThis(createIterator(dummy).next);
          const SafeIterator = createSafeIterator(createIterator, next);
          desc.value = function () {
            return new SafeIterator(this);
          };
        }
        ReflectDefineProperty(safe.prototype, key, {
          // @ts-ignore
          __proto__: null,
          ...desc,
        });
      }
    });
  } else {
    copyProps(unsafe.prototype, safe.prototype);
  }
  copyProps(unsafe, safe);

  ObjectSetPrototypeOf(safe.prototype, null);
  ObjectFreeze(safe.prototype);
  ObjectFreeze(safe);
  return safe;
}

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
    return ReflectApply(RegExpPrototypeExec, this.#regex, arguments);
  }
}
ObjectSetPrototypeOf(RegExpLikeForStringSplitting.prototype, null);

/** @see https://github.com/nodejs/node/blob/v20.2.0/lib/internal/per_context/primordials.js#L625-L715 */
export function hardenRegExp(pattern: RegExp) {
  ObjectDefineProperties(pattern, {
    [SymbolMatch]: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeSymbolMatch,
    },
    [SymbolMatchAll]: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeSymbolMatchAll,
    },
    [SymbolReplace]: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeSymbolReplace,
    },
    [SymbolSearch]: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeSymbolSearch,
    },
    [SymbolSplit]: {
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeSymbolSplit,
    },
    constructor: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: {
        [SymbolSpecies]: RegExpLikeForStringSplitting,
      },
    },
    dotAll: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetDotAll(pattern),
    },
    exec: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeExec,
    },
    global: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetGlobal(pattern),
    },
    hasIndices: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetHasIndices(pattern),
    },
    ignoreCase: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetIgnoreCase(pattern),
    },
    multiline: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetMultiline(pattern),
    },
    source: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetSource(pattern),
    },
    sticky: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetSticky(pattern),
    },
    unicode: {
      // @ts-ignore
      __proto__: null,
      configurable: true,
      value: RegExpPrototypeGetUnicode(pattern),
    },
  });
  ObjectDefineProperty(pattern, "flags", {
    // @ts-ignore
    __proto__: null,
    configurable: true,
    value: RegExpPrototypeGetFlags(pattern),
  });
  return pattern;
}
