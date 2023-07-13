import uncurryThis from "./uncurryThis.js";

const PromiseAny = uncurryThis(Promise.any, Promise);
export = PromiseAny;
