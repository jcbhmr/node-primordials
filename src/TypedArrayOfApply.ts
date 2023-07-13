import applyBind from "./applyBind.js";
import TypedArray from "./TypedArray.js";

// @ts-ignore
const TypedArrayOfApply = applyBind(TypedArray.of, TypedArray) as (
  a: number[]
) => never;
export = TypedArrayOfApply;
