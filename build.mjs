#!/usr/bin/env node
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import { $ } from "execa";

await fsPromises.rm("dist", { recursive: true, force: true });
await fsPromises.mkdir("dist/internal", { recursive: true });

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

var js = `
  "use strict";
  const { apply, bind, call } = Function.prototype;
  const uncurryThis = bind.bind(call);
  module.exports = uncurryThis;
`;
await fsPromises.writeFile("dist/uncurryThis.js", js);

var js = `
  "use strict";
  const { apply, bind, call } = Function.prototype;
  const applyBind = bind.bind(apply);
  module.exports = applyBind;
`;
await fsPromises.writeFile("dist/applyBind.js", js);

const varargsMethods = [
  "ArrayOf",
  "ArrayPrototypePush",
  "ArrayPrototypeUnshift",
  "MathHypot",
  "MathMax",
  "MathMin",
  "StringFromCharCode",
  "StringFromCodePoint",
  "StringPrototypeConcat",
  "TypedArrayOf",
];

function getNewKey(key) {
  return typeof key === "symbol"
    ? `Symbol${key.description[7].toUpperCase()}${key.description.slice(8)}`
    : `${key[0].toUpperCase()}${key.slice(1)}`;
}
function getOldKey(desc) {
  return desc.startsWith("Symbol")
    ? Symbol[`${desc.slice(6, 7).toLowerCase()}${desc.slice(7)}`]
    : `${desc[0].toLowerCase()}${desc.slice(1)}`;
}

async function copyAccessor(dest, prefix, key, { enumerable, get, set }) {
  var js = `
    "use strict";
    const uncurryThis = require("./uncurryThis.js");
    const prefix = require("./${escapePrimName(prefix)}.js");
    const { get } = Object.getOwnPropertyDescriptor(prefix, ${
      getOldKey(key).description || `"${getOldKey(key)}"`
    });
    const ${escapePrimName(`${prefix}Get${key}`)} = uncurryThis(get);
    module.exports = ${escapePrimName(`${prefix}Get${key}`)};
  `;
  await fsPromises.writeFile(
    `dist/${escapePrimName(`${prefix}Get${key}`)}.js`,
    js
  );
  if (set !== undefined) {
    var js = `
      "use strict";
      const uncurryThis = require("./uncurryThis.js");
      const prefix = require("./${escapePrimName(prefix)}.js");
      const { set } = Object.getOwnPropertyDescriptor(prefix, ${
        getOldKey(key).description || `"${getOldKey(key)}"`
      });
      const ${escapePrimName(`${prefix}Set${key}`)} = uncurryThis(set);
      module.exports = ${escapePrimName(`${prefix}Set${key}`)};
    `;
    await fsPromises.writeFile(
      `dist/${escapePrimName(`${prefix}Set${key}`)}.js`,
      js
    );
  }
}

async function copyPropsRenamed(src, dest, prefix) {
  for (const key of Reflect.ownKeys(src)) {
    const newKey = getNewKey(key);
    const desc = Reflect.getOwnPropertyDescriptor(src, key);
    if ("get" in desc) {
      await copyAccessor(dest, prefix, newKey, desc);
    } else {
      const name = `${prefix}${newKey}`;
      var js = `
        "use strict";
        const src = ${
          prefix in globalThis
            ? prefix
            : `require("./${escapePrimName(prefix)}.js")`
        };
        const ${escapePrimName(name)} = src[${key.description || `"${key}"`}];
        module.exports = ${escapePrimName(name)};
      `;
      await fsPromises.writeFile(`dist/${escapePrimName(name)}.js`, js);
      if (varargsMethods.includes(name)) {
        var js = `
          "use strict";
          const applyBind = require("./applyBind.js");
          const src = ${
            prefix in globalThis
              ? prefix
              : `require("./${escapePrimName(prefix)}.js")`
          };
          const ${escapePrimName(`${name}Apply`)} = applyBind(src[${
          key.description || `"${key}"`
        }], src);
          module.exports = ${escapePrimName(`${name}Apply`)};
        `;
        await fsPromises.writeFile(
          `dist/${escapePrimName(`${name}Apply`)}.js`,
          js
        );
      }
    }
  }
}

async function copyPropsRenamedBound(src, dest, prefix) {
  for (const key of Reflect.ownKeys(src)) {
    const newKey = getNewKey(key);
    const desc = Reflect.getOwnPropertyDescriptor(src, key);
    if ("get" in desc) {
      await copyAccessor(dest, prefix, newKey, desc);
    } else {
      const { value } = desc;
      const name = `${prefix}${newKey}`;
      var js = `
        "use strict";
        const src = require("./${escapePrimName(prefix)}.js");
        const ${escapePrimName(name)} = src[${key.description || `"${key}"`}]${
        typeof value === "function" ? `.bind(src)` : ""
      };
        module.exports = ${escapePrimName(name)};
      `;
      await fsPromises.writeFile(`dist/${escapePrimName(name)}.js`, js);
      if (varargsMethods.includes(name)) {
        var js = `
          "use strict";
          const applyBind = require("./applyBind.js");
          const src = require("./${escapePrimName(prefix)}.js");
          const ${escapePrimName(`${name}Apply`)} = applyBind(src[${
          key.description || `"${key}"`
        }]${typeof value === "function" ? `.bind(src)` : ""}, src);
          module.exports = ${escapePrimName(`${name}Apply`)};
        `;
        await fsPromises.writeFile(
          `dist/${escapePrimName(`${name}Apply`)}.js`,
          js
        );
      }
    }
  }
}

async function copyPrototype(src, dest, prefix) {
  for (const key of Reflect.ownKeys(src)) {
    const newKey = getNewKey(key);
    const desc = Reflect.getOwnPropertyDescriptor(src, key);
    if ("get" in desc) {
      await copyAccessor(dest, prefix, newKey, desc);
    } else {
      const { value } = desc;
      const name = `${prefix}${newKey}`;
      var js = `
        "use strict";
        ${
          typeof value === "function"
            ? `const uncurryThis = require("./uncurryThis.js");`
            : ""
        }
        const src = require("./${escapePrimName(prefix)}.js");
        const ${escapePrimName(name)} = ${
        typeof value === "function" ? `uncurryThis(` : ""
      }src[${key.description || `"${key}"`}]${
        typeof value === "function" ? `)` : ""
      };
        module.exports = ${escapePrimName(name)};
      `;
      await fsPromises.writeFile(`dist/${escapePrimName(name)}.js`, js);
      if (varargsMethods.includes(name)) {
        var js = `
          "use strict";
          const applyBind = require("./applyBind.js");
          const src = require("./${escapePrimName(prefix)}.js");
          const ${escapePrimName(`${name}Apply`)} = applyBind(src[${
          key.description || `"${key}"`
        }]);
          module.exports = ${escapePrimName(`${name}Apply`)};
        `;
        await fsPromises.writeFile(
          `dist/${escapePrimName(`${name}Apply`)}.js`,
          js
        );
      }
    }
  }
}

for (const name of ["Proxy", "globalThis"]) {
  if (name === "globalThis") {
    var js = `
      "use strict";
      const globalThis_ = globalThis;
      module.exports = globalThis_;
    `;
    await fsPromises.writeFile(`dist/globalThis.js`, js);
    continue;
  }
  var js = `
    "use strict";
    const ${name} = globalThis.${name};
    module.exports = ${name};
  `;
  await fsPromises.writeFile(`dist/${name}.js`, js);
}

for (const fn of [
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
]) {
  var js = `
    "use strict";
    const ${fn.name} = globalThis.${fn.name};
    module.exports = ${fn.name};
  `;
  await fsPromises.writeFile(`dist/${fn.name}.js`, js);
}

// Create copies of legacy functions
for (const fn of [escape, eval, unescape]) {
  if (fn.name === "eval") {
    var js = `
      "use strict";
      const eval_ = globalThis.eval;
      module.exports = eval_;
    `;
    await fsPromises.writeFile(`dist/eval.js`, js);
    continue;
  }
  var js = `
    "use strict";
    const ${fn.name} = globalThis.${fn.name};
    module.exports = ${fn.name};
  `;
  await fsPromises.writeFile(`dist/${fn.name}.js`, js);
}

for (const name of ["JSON", "Math", "Proxy", "Reflect"]) {
  await copyPropsRenamed(globalThis[name], {}, name);
}

for (const name of [
  "AggregateError",
  "Array",
  "ArrayBuffer",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "FinalizationRegistry",
  "Float32Array",
  "Float64Array",
  "Function",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Map",
  "Number",
  "Object",
  "RangeError",
  "ReferenceError",
  "RegExp",
  "Set",
  "String",
  "Symbol",
  "SyntaxError",
  "TypeError",
  "URIError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "WeakMap",
  "WeakRef",
  "WeakSet",
]) {
  const original = globalThis[name];
  var js = `
    "use strict";
    const ${name} = globalThis.${name};
    module.exports = ${name};
  `;
  await fsPromises.writeFile(`dist/${name}.js`, js);

  await copyPropsRenamed(original, {}, name);
  await copyPrototype(original.prototype, {}, `${name}Prototype`);
}

for (const name of ["Promise"]) {
  // eslint-disable-next-line no-restricted-globals
  const original = globalThis[name];
  var js = `
    "use strict";
    const ${name} = globalThis.${name};
    module.exports = ${name};
  `;
  await fsPromises.writeFile(`dist/${name}.js`, js);

  await copyPropsRenamedBound(original, {}, name);
  await copyPrototype(original.prototype, {}, `${name}Prototype`);
}

for (const { name, original, originalExpr } of [
  {
    name: "TypedArray",
    originalExpr: `Reflect.getPrototypeOf(Uint8Array)`,
    original: Reflect.getPrototypeOf(Uint8Array),
  },
  {
    name: "ArrayIterator",
    originalExpr: `{
    prototype: Reflect.getPrototypeOf(Array.prototype[Symbol.iterator]()),
  }`,
    original: {
      prototype: Reflect.getPrototypeOf(Array.prototype[Symbol.iterator]()),
    },
  },
  {
    name: "StringIterator",
    originalExpr: `{
    prototype: Reflect.getPrototypeOf(String.prototype[Symbol.iterator]()),
  }`,
    original: {
      prototype: Reflect.getPrototypeOf(String.prototype[Symbol.iterator]()),
    },
  },
]) {
  var js = `
    "use strict";
    const ${name} = ${originalExpr};
    module.exports = ${name};
  `;
  await fsPromises.writeFile(`dist/${name}.js`, js);

  await copyPrototype(original, {}, name);
  await copyPrototype(original.prototype, {}, `${name}Prototype`);
}

var js = `
  "use strict";
  const ArrayIteratorPrototype = require("./ArrayIteratorPrototype.js");
  const IteratorPrototype = Reflect.getPrototypeOf(ArrayIteratorPrototype);
  module.exports = IteratorPrototype;
`;
await fsPromises.writeFile(`dist/IteratorPrototype.js`, js);

var js = `
  "use strict";
  const ObjectSetPrototypeOf = require("../ObjectSetPrototypeOf.js");
  const SymbolIterator = require("../SymbolIterator.js");
  const ObjectFreeze = require("../ObjectFreeze.js");
  /**
   * Creates a class that can be safely iterated over.
   *
   * Because these functions are used by makeSafe, which is exposed on the
   * primordials object, it's important to use const references to the
   * primordials that they use.
   * @template {Iterable} T
   * @template {*} TReturn
   * @template {*} TNext
   * @param {(self: T) => IterableIterator<T>} factory
   * @param {(...args: [] | [TNext]) => IteratorResult<T, TReturn>} next
   * @returns {Iterator<T, TReturn, TNext>}
   */
  const createSafeIterator = (factory, next) => {
    class SafeIterator {
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
  };
  module.exports = createSafeIterator;
`;
await fsPromises.writeFile(`dist/internal/createSafeIterator.js`, js);

var js = `
  "use strict";
  const createSafeIterator = require("./internal/createSafeIterator.js");
  const ArrayPrototypeSymbolIterator = require("./ArrayPrototypeSymbolIterator.js");
  const ArrayIteratorPrototypeNext = require("./ArrayIteratorPrototypeNext.js");
  const SafeArrayIterator = createSafeIterator(
    ArrayPrototypeSymbolIterator,
    ArrayIteratorPrototypeNext,
  );
  module.exports = SafeArrayIterator;
`;
await fsPromises.writeFile(`dist/SafeArrayIterator.js`, js);
var js = `
  "use strict";
  const createSafeIterator = require("./internal/createSafeIterator.js");
  const StringPrototypeSymbolIterator = require("./StringPrototypeSymbolIterator.js");
  const StringIteratorPrototypeNext = require("./StringIteratorPrototypeNext.js");
  const SafeStringIterator = createSafeIterator(
    StringPrototypeSymbolIterator,
    StringIteratorPrototypeNext,
  );
  module.exports = SafeStringIterator;
`;
await fsPromises.writeFile(`dist/SafeStringIterator.js`, js);

var js = `
  "use strict";
  const ArrayPrototypeForEach = require("../ArrayPrototypeForEach.js");
  const ReflectOwnKeys = require("../ReflectOwnKeys.js");
  const ReflectGetOwnPropertyDescriptor = require("../ReflectGetOwnPropertyDescriptor.js");
  const ReflectDefineProperty = require("../ReflectDefineProperty.js");
  const copyProps = (src, dest) => {
    ArrayPrototypeForEach(ReflectOwnKeys(src), (key) => {
      if (!ReflectGetOwnPropertyDescriptor(dest, key)) {
        ReflectDefineProperty(
          dest,
          key,
          { __proto__: null, ...ReflectGetOwnPropertyDescriptor(src, key) });
      }
    });
  };
  module.exports = copyProps;
`;
await fsPromises.writeFile(`dist/internal/copyProps.js`, js);

var js = `
  "use strict";
  const SymbolIterator = require("./SymbolIterator.js");
  const ArrayPrototypeForEach = require("./ArrayPrototypeForEach.js");
  const ReflectOwnKeys = require("./ReflectOwnKeys.js");
  const ReflectGetOwnPropertyDescriptor = require("./ReflectGetOwnPropertyDescriptor.js");
  const FunctionPrototypeCall = require("./FunctionPrototypeCall.js");
  const uncurryThis = require("./uncurryThis.js");
  const createSafeIterator = require("./internal/createSafeIterator.js");
  const ReflectDefineProperty = require("./ReflectDefineProperty.js");
  const copyProps = require("./internal/copyProps.js");
  const ObjectSetPrototypeOf = require("./ObjectSetPrototypeOf.js");
  const ObjectFreeze = require("./ObjectFreeze.js");
  /**
   * @type {typeof primordials.makeSafe}
   */
  const makeSafe = (unsafe, safe) => {
    if (SymbolIterator in unsafe.prototype) {
      const dummy = new unsafe();
      let next; // We can reuse the same next method.

      ArrayPrototypeForEach(ReflectOwnKeys(unsafe.prototype), (key) => {
        if (!ReflectGetOwnPropertyDescriptor(safe.prototype, key)) {
          const desc = ReflectGetOwnPropertyDescriptor(unsafe.prototype, key);
          if (
            typeof desc.value === 'function' &&
            desc.value.length === 0 &&
            SymbolIterator in (FunctionPrototypeCall(desc.value, dummy) ?? {})
          ) {
            const createIterator = uncurryThis(desc.value);
            next ??= uncurryThis(createIterator(dummy).next);
            const SafeIterator = createSafeIterator(createIterator, next);
            desc.value = function() {
              return new SafeIterator(this);
            };
          }
          ReflectDefineProperty(safe.prototype, key, { __proto__: null, ...desc });
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
  };
  module.exports = makeSafe;
`;
await fsPromises.writeFile(`dist/makeSafe.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeMap = makeSafe(
    Map,
    class SafeMap extends Map {
      constructor(i) { super(i); } // eslint-disable-line no-useless-constructor
    },
  );
  module.exports = SafeMap;
`;
await fsPromises.writeFile(`dist/SafeMap.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeWeakMap = makeSafe(
    WeakMap,
    class SafeWeakMap extends WeakMap {
      constructor(i) { super(i); } // eslint-disable-line no-useless-constructor
    },
  );
  module.exports = SafeWeakMap;
`;
await fsPromises.writeFile(`dist/SafeWeakMap.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeSet = makeSafe(
    Set,
    class SafeSet extends Set {
      constructor(i) { super(i); } // eslint-disable-line no-useless-constructor
    },
  );
  module.exports = SafeSet;
`;
await fsPromises.writeFile(`dist/SafeSet.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeWeakSet = makeSafe(
    WeakSet,
    class SafeWeakSet extends WeakSet {
      constructor(i) { super(i); } // eslint-disable-line no-useless-constructor
    },
  );
  module.exports = SafeWeakSet;
`;
await fsPromises.writeFile(`dist/SafeWeakSet.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeFinalizationRegistry = makeSafe(
    FinalizationRegistry,
    class SafeFinalizationRegistry extends FinalizationRegistry {
      // eslint-disable-next-line no-useless-constructor
      constructor(cleanupCallback) { super(cleanupCallback); }
    },
  );
  module.exports = SafeFinalizationRegistry;
`;
await fsPromises.writeFile(`dist/SafeFinalizationRegistry.js`, js);

var js = `
  "use strict";
  const makeSafe = require("./makeSafe.js");
  const SafeWeakRef = makeSafe(
    WeakRef,
    class SafeWeakRef extends WeakRef {
      // eslint-disable-next-line no-useless-constructor
      constructor(target) { super(target); }
    },
  );
  module.exports = SafeWeakRef;
`;
await fsPromises.writeFile(`dist/SafeWeakRef.js`, js);

var js = `
  "use strict";
  const makeSafe = require("../makeSafe.js");
  const SafePromise = makeSafe(
    Promise,
    class SafePromise extends Promise {
      // eslint-disable-next-line no-useless-constructor
      constructor(executor) { super(executor); }
    },
  );
  module.exports = SafePromise;
`;
await fsPromises.writeFile(`dist/internal/SafePromise.js`, js);

var js = `
  "use strict";
  const SafePromise = require("./internal/SafePromise.js");
  const PromisePrototypeThen = require("./PromisePrototypeThen.js");
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or
   * rejected). The resolved value cannot be modified from the callback.
   * Prefer using async functions when possible.
   * @param {Promise<any>} thisPromise
   * @param {() => void) | undefined | null} onFinally The callback to execute
   *        when the Promise is settled (fulfilled or rejected).
   * @returns {Promise} A Promise for the completion of the callback.
   */
  const SafePromisePrototypeFinally = (thisPromise, onFinally) =>
    // Wrapping on a new Promise is necessary to not expose the SafePromise
    // prototype to user-land.
    new Promise((a, b) =>
      new SafePromise((a, b) => PromisePrototypeThen(thisPromise, a, b))
        .finally(onFinally)
        .then(a, b),
    );
  module.exports = SafePromisePrototypeFinally;
`;
await fsPromises.writeFile(`dist/SafePromisePrototypeFinally.js`, js);

var js = `
  "use strict";
  const AsyncIteratorPrototype =
    Reflect.getPrototypeOf(
      Reflect.getPrototypeOf(
        async function* () {}).prototype);
  module.exports = AsyncIteratorPrototype;
`;
await fsPromises.writeFile(`dist/AsyncIteratorPrototype.js`, js);

var js = `
  "use strict";
  const SafeArrayIterator = require("../SafeArrayIterator.js");
  const ArrayPrototypeMap = require("../ArrayPrototypeMap.js");
  const SafePromise = require("./SafePromise.js");
  const PromisePrototypeThen = require("../PromisePrototypeThen.js");
  const arrayToSafePromiseIterable = (promises, mapFn) =>
    new SafeArrayIterator(
      ArrayPrototypeMap(
        promises,
        (promise, i) =>
          new SafePromise((a, b) => PromisePrototypeThen(mapFn == null ? promise : mapFn(promise, i), a, b)),
      ),
    );
  module.exports = arrayToSafePromiseIterable;
`;
await fsPromises.writeFile(`dist/internal/arrayToSafePromiseIterable.js`, js);

var js = `
  "use strict";
  const SafePromise = require("./internal/SafePromise.js");
  const arrayToSafePromiseIterable = require("./internal/arrayToSafePromiseIterable.js");
  /**
   * @template T,U
   * @param {Array<T | PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<Awaited<U>[]>}
   */
  const SafePromiseAll = (promises, mapFn) =>
    // Wrapping on a new Promise is necessary to not expose the SafePromise
    // prototype to user-land.
    new Promise((a, b) =>
      SafePromise.all(arrayToSafePromiseIterable(promises, mapFn)).then(a, b),
    );
  module.exports = SafePromiseAll;
`;
await fsPromises.writeFile(`dist/SafePromiseAll.js`, js);

var js = `
  "use strict";
  const ObjectSetPrototypeOf = require("./ObjectSetPrototypeOf.js");
  const ArrayConstructor = require("./Array.js");
  const PromisePrototypeThen = require("./PromisePrototypeThen.js");
  /**
   * Should only be used for internal functions, this would produce similar
   * results as Promise.all but without prototype pollution, and the return
   * value is not a genuine Array but an array-like object.
   * @template T,U
   * @param {ArrayLike<T | PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<ArrayLike<Awaited<U>>>}
   */
  const SafePromiseAllReturnArrayLike = (promises, mapFn) =>
    new Promise((resolve, reject) => {
      const { length } = promises;

      const returnVal = ArrayConstructor(length);
      ObjectSetPrototypeOf(returnVal, null);
      if (length === 0) resolve(returnVal);

      let pendingPromises = length;
      for (let i = 0; i < length; i++) {
        const promise = mapFn != null ? mapFn(promises[i], i) : promises[i];
        PromisePrototypeThen(PromiseResolve(promise), (result) => {
          returnVal[i] = result;
          if (--pendingPromises === 0) resolve(returnVal);
        }, reject);
      }
    });
  module.exports = SafePromiseAllReturnArrayLike;
`;
await fsPromises.writeFile(`dist/SafePromiseAllReturnArrayLike.js`, js);

var js = `
  "use strict";
  const PromisePrototypeThen = require("./PromisePrototypeThen.js");
  const PromiseResolve = require("./PromiseResolve.js");
  /**
   * Should only be used when we only care about waiting for all the promises to
   * resolve, not what value they resolve to.
   * @template T,U
   * @param {ArrayLike<T | PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<void>}
   */
  const SafePromiseAllReturnVoid = (promises, mapFn) =>
    new Promise((resolve, reject) => {
      let pendingPromises = promises.length;
      if (pendingPromises === 0) resolve();
      for (let i = 0; i < promises.length; i++) {
        const promise = mapFn != null ? mapFn(promises[i], i) : promises[i];
        PromisePrototypeThen(PromiseResolve(promise), () => {
          if (--pendingPromises === 0) resolve();
        }, reject);
      }
    });
  module.exports = SafePromiseAllReturnVoid;
`;
await fsPromises.writeFile(`dist/SafePromiseAllReturnVoid.js`, js);

var js = `
  "use strict";
  const SafePromise = require("./internal/SafePromise.js");
  const arrayToSafePromiseIterable = require("./internal/arrayToSafePromiseIterable.js");
  /**
   * @template T,U
   * @param {Array<T|PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<PromiseSettledResult<any>[]>}
   */
  const SafePromiseAllSettled = (promises, mapFn) =>
    // Wrapping on a new Promise is necessary to not expose the SafePromise
    // prototype to user-land.
    new Promise((a, b) =>
      SafePromise.allSettled(arrayToSafePromiseIterable(promises, mapFn)).then(a, b),
    );
  module.exports = SafePromiseAllSettled;
`;
await fsPromises.writeFile(`dist/SafePromiseAllSettled.js`, js);

var js = `
  "use strict";
  const SafePromiseAllSettled = require("./SafePromiseAllSettled.js");
  /**
   * Should only be used when we only care about waiting for all the promises to
   * settle, not what value they resolve or reject to.
   * @template T,U
   * @param {ArrayLike<T|PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<void>}
   */
  const SafePromiseAllSettledReturnVoid = async (promises, mapFn) => {
    await SafePromiseAllSettled(promises, mapFn);
  };
  module.exports = SafePromiseAllSettledReturnVoid;
`;
await fsPromises.writeFile(`dist/SafePromiseAllSettledReturnVoid.js`, js);

var js = `
  "use strict";
  const SafePromise = require("./internal/SafePromise.js");
  const arrayToSafePromiseIterable = require("./internal/arrayToSafePromiseIterable.js");
  /**
   * @template T,U
   * @param {Array<T|PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<Awaited<U>>}
   */
  const SafePromiseAny = (promises, mapFn) =>
    // Wrapping on a new Promise is necessary to not expose the SafePromise
    // prototype to user-land.
    new Promise((a, b) =>
      SafePromise.any(arrayToSafePromiseIterable(promises, mapFn)).then(a, b),
    );
  module.exports = SafePromiseAny;
`;
await fsPromises.writeFile(`dist/SafePromiseAny.js`, js);

var js = `
  "use strict";
  const SafePromise = require("./internal/SafePromise.js");
  const arrayToSafePromiseIterable = require("./internal/arrayToSafePromiseIterable.js");
  /**
   * @template T,U
   * @param {Array<T|PromiseLike<T>>} promises
   * @param {(v: T|PromiseLike<T>, k: number) => U|PromiseLike<U>} [mapFn]
   * @returns {Promise<Awaited<U>>}
   */
  const SafePromiseRace = (promises, mapFn) =>
    // Wrapping on a new Promise is necessary to not expose the SafePromise
    // prototype to user-land.
    new Promise((a, b) =>
      SafePromise.race(arrayToSafePromiseIterable(promises, mapFn)).then(a, b),
    );
  module.exports = SafePromiseRace;
`;
await fsPromises.writeFile(`dist/SafePromiseRace.js`, js);

var js = `
  "use strict";
  const RegExpPrototype = require("../RegExpPrototype.js");
  const SymbolMatch = require("../SymbolMatch.js");
  const SymbolMatchAll = require("../SymbolMatchAll.js");
  const SymbolReplace = require("../SymbolReplace.js");
  const SymbolSearch = require("../SymbolSearch.js");
  const SymbolSplit = require("../SymbolSplit.js");
  const ReflectConstruct = require("../ReflectConstruct.js");
  const ReflectGet = require("../ReflectGet.js");
  const ReflectSet = require("../ReflectSet.js");
  const ReflectApply = require("../ReflectApply.js");
  const ObjectSetPrototypeOf = require("../ObjectSetPrototypeOf.js");
  const {
    exec: OriginalRegExpPrototypeExec,
    [SymbolMatch]: OriginalRegExpPrototypeSymbolMatch,
    [SymbolMatchAll]: OriginalRegExpPrototypeSymbolMatchAll,
    [SymbolReplace]: OriginalRegExpPrototypeSymbolReplace,
    [SymbolSearch]: OriginalRegExpPrototypeSymbolSearch,
    [SymbolSplit]: OriginalRegExpPrototypeSymbolSplit,
  } = RegExpPrototype;
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
  ObjectSetPrototypeOf(RegExpLikeForStringSplitting.prototype, null);
  module.exports = RegExpLikeForStringSplitting;
`;
await fsPromises.writeFile(`dist/internal/RegExpLikeForStringSplitting.js`, js);

var js = `
  "use strict";
  /**
  * @param {RegExp} pattern
  * @returns {RegExp}
  */
  const hardenRegExp = function hardenRegExp(pattern) {
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
  module.exports = hardenRegExp;
`;
await fsPromises.writeFile(`dist/hardenRegExp.js`, js);

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
await fsPromises.writeFile(`dist/SafeStringPrototypeSearch.js`, js);

/** @type {string[]} */
const primNames = JSON.parse(
  (
    await $`node \
    --no-warnings \
    --expose-internals \
    -r internal/test/binding \
    -p ${`JSON.stringify(Object.getOwnPropertyNames(primordials))`}`
  ).stdout
);

var js = `"use strict";`;
js += `const primordials = {`;
for (const primName of primNames) {
  js += `"${primName}": require("./${escapePrimName(primName)}.js"),`;
}
js += `};`;
js += `Object.setPrototypeOf(primordials, null);`;
js += `Object.freeze(primordials);`;
js += `module.exports = primordials;`;
await fsPromises.writeFile(`dist/primordials.js`, js);

var js = `"use strict";`;
for (const primName of primNames) {
  js += `exports["${primName}"] = require("./${escapePrimName(primName)}.js");`;
}
await fsPromises.writeFile(`dist/index.js`, js);

var js = `
  "use strict";
  if (typeof primordials === "undefined") {
    const primordials_ = require("./primordials.js");
    /** @global */
    globalThis.primordials = primordials_;
  }
`;
await fsPromises.writeFile(`dist/polyfill.js`, js);

var tsconfig = `{
  "compilerOptions": {
    "noEmit": true,
    "allowJs": true,
    "checkJs": true,
    "target": "ESNext",
    "module": "CommonJS",
    "moduleResolution": "NodeNext",
    "strict": false,
    "isolatedModules": true
  }
}`;
await fsPromises.writeFile(`dist/tsconfig.json`, tsconfig);
process.on("exit", () => fs.rmSync("dist/tsconfig.json"));

try {
  await $({ cwd: "dist" })`npx tsc --noEmit`;
} catch (error) {
  console.error(error.stderr + error.stdout);
  // TODO: Fix type errors?
  // process.exit(error.exitCode);
}
