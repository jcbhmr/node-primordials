import uncurryThis from "./uncurryThis.js";

const PromiseReject = uncurryThis(
  Promise.reject,
  // @ts-ignore
  Promise
) as typeof Promise.reject;
export = PromiseReject;
