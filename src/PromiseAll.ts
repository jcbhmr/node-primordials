import uncurryThis from "./uncurryThis.js";

const PromiseAll = uncurryThis(Promise.all, Promise);
export = PromiseAll;
