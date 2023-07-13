import uncurryThis from "./uncurryThis.js";

const PromiseResolve = uncurryThis(Promise.resolve, Promise);
export = PromiseResolve;
