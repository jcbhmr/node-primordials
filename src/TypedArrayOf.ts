import TypedArray from "./TypedArray.js";
import uncurryThis from "./uncurryThis.js";

// @ts-ignore
const TypedArrayOf = uncurryThis(TypedArray.of) as (
  t: TypedArray,
  ...a: number[]
) => TypedArray;
export = TypedArrayOf;
