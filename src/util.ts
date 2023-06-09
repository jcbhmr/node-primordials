import {
  ObjectDefineProperties,
  ObjectDefineProperty,
  ObjectFreeze,
  ObjectSetPrototypeOf,
} from "./Object.js";
import {
  SymbolMatch,
  SymbolMatchAll,
  SymbolReplace,
  SymbolSearch,
  SymbolSplit,
  SymbolSpecies,
  SymbolIterator,
} from "./Symbol.js";
import {
  RegExpPrototypeSymbolMatch,
  RegExpPrototypeSymbolMatchAll,
  RegExpPrototypeSymbolReplace,
  RegExpPrototypeSymbolSearch,
  RegExpPrototypeSymbolSplit,
  RegExpPrototypeGetDotAll,
  RegExpPrototypeExec,
  RegExpPrototypeGetGlobal,
  RegExpPrototypeGetHasIndices,
  RegExpPrototypeGetIgnoreCase,
  RegExpPrototypeGetMultiline,
  RegExpPrototypeGetSource,
  RegExpPrototypeGetSticky,
  RegExpPrototypeGetUnicode,
  RegExpPrototypeGetFlags,
} from "./RegExp.js";
import { ArrayPrototypeForEach } from "./Array.js";
import {
  ReflectApply,
  ReflectConstruct,
  ReflectDefineProperty,
  ReflectGet,
  ReflectGetOwnPropertyDescriptor,
  ReflectOwnKeys,
  ReflectSet,
} from "./Reflect.js";
import { FunctionPrototypeCall } from "./Function.js";

/**
 * `uncurryThis` is equivalent to `func => Function.prototype.call.bind(func)`.
 * It is using `bind.bind(call)` to avoid using `Function.prototype.bind`
 * and `Function.prototype.call` after it may have been mutated by users.
 *
 * @see https://github.com/nodejs/node/blob/v20.2.0/lib/internal/per_context/primordials.js#L19-L24
 */
export const uncurryThis = Function.bind.bind(Function.call);

/**
 * `applyBind` is equivalent to `func => Function.prototype.apply.bind(func)`.
 * It is using `bind.bind(apply)` to avoid using `Function.prototype.bind`
 * and `Function.prototype.apply` after it may have been mutated by users.
 *
 * @see https://github.com/nodejs/node/blob/v20.2.0/lib/internal/per_context/primordials.js#L26-L30
 */
export const applyBind = Function.bind.bind(Function.apply);

/**
 * Creates a class that can be safely iterated over.
 *
 * Because these functions are used by `makeSafe`, which is exposed on the
 * `primordials` object, it's important to use const references to the
 * primordials that they use.
 * @template {Iterable} T
 * @template {*} TReturn
 * @template {*} TNext
 * @param {(self: T) => IterableIterator<T>} factory
 * @param {(...args: [] | [TNext]) => IteratorResult<T, TReturn>} next
 * @returns {Iterator<T, TReturn, TNext>}
 */
export function createSafeIterator(factory, next) {
  class SafeIterator {
    _iterator;
    constructor(iterable) {
      this._iterator = factory(iterable);
    }
    next() {
      return next(this._iterator);
    }
    [SymbolIterator]() {
      return this;
    }
  }
  ObjectSetPrototypeOf(SafeIterator.prototype, null);
  ObjectFreeze(SafeIterator.prototype);
  ObjectFreeze(SafeIterator);
  return SafeIterator;
}

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
