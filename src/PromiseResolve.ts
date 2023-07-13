import uncurryThis from "./uncurryThis.js";

const PromiseResolve = uncurryThis(
  Promise.resolve,
  // @ts-ignore
  Promise
) as typeof Promise.resolve;
export = PromiseResolve;
