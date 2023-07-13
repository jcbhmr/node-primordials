// @ts-ignore
import SymbolIterator from "./SymbolIterator.js";
// @ts-ignore
import ArrayPrototypeForEach from "./ArrayPrototypeForEach.js";
// @ts-ignore
import ReflectOwnKeys from "./ReflectOwnKeys.js";
// @ts-ignore
import ReflectGetOwnPropertyDescriptor from "./ReflectGetOwnPropertyDescriptor.js";
// @ts-ignore
import FunctionPrototypeCall from "./FunctionPrototypeCall.js";
// @ts-ignore
import ReflectDefineProperty from "./ReflectDefineProperty.js";
// @ts-ignore
import ObjectSetPrototypeOf from "./ObjectSetPrototypeOf.js";
// @ts-ignore
import ObjectFreeze from "./ObjectFreeze.js";

import createSafeIterator from "./lib/createSafeIterator.js";
import uncurryThis from "./uncurryThis.js";
import copyProps from "./lib/copyProps.js";

function makeSafe<T extends new (...a: any[]) => object>(
  unsafe: T,
  safe: T
): T {
  if (SymbolIterator in unsafe.prototype) {
    const dummy = new unsafe();
    let next; // We can reuse the same next method.

    ArrayPrototypeForEach(ReflectOwnKeys(unsafe.prototype), (key) => {
      if (!ReflectGetOwnPropertyDescriptor(safe.prototype, key)) {
        const desc = ReflectGetOwnPropertyDescriptor(unsafe.prototype, key);
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
export = makeSafe;
