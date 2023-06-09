import { uncurryThis } from "./util.js";

export default Function;
export const FunctionLength = Function.length;
export const FunctionName = Function.name;
export const FunctionPrototype = Function.prototype;
export const FunctionPrototypeLength = Function.prototype.length;
export const FunctionPrototypeName = Function.prototype.name;
export const FunctionPrototypeGetArguments = uncurryThis(
  Object.getOwnPropertyDescriptor(Function.prototype, "arguments")!.get!
);
export const FunctionPrototypeSetArguments = uncurryThis(
  Object.getOwnPropertyDescriptor(Function.prototype, "arguments")!.set!
);
export const FunctionPrototypeGetCaller = uncurryThis(
  Object.getOwnPropertyDescriptor(Function.prototype, "caller")!.get!
);
export const FunctionPrototypeSetCaller = uncurryThis(
  Object.getOwnPropertyDescriptor(Function.prototype, "caller")!.set!
);
export const FunctionPrototypeConstructor = Function.prototype.constructor;
export const FunctionPrototypeApply = uncurryThis(Function.prototype.apply);
export const FunctionPrototypeBind = uncurryThis(Function.prototype.bind);
export const FunctionPrototypeCall = uncurryThis(Function.prototype.call);
export const FunctionPrototypeToString = uncurryThis(
  Function.prototype.toString
);
export const FunctionPrototypeSymbolHasInstance = uncurryThis(
  Function.prototype[Symbol.hasInstance]
);
