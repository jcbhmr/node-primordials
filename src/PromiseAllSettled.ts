import uncurryThis from "./uncurryThis.js";

const PromiseAllSettled = uncurryThis(
  Promise.allSettled,
  // @ts-ignore
  Promise
) as typeof Promise.allSettled;
export = PromiseAllSettled;
