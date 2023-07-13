import type { UncurryThisStaticApply } from "./uncurryThis.js";

const { apply, bind, call } = Function.prototype;

const applyBind: <T extends (...args: any[]) => any>(
  fn: T
) => UncurryThisStaticApply<T> = bind.bind(apply);

export = applyBind;
