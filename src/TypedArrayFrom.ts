import TypedArray from "./TypedArray.js";
import uncurryThis from "./uncurryThis.js";

// @ts-ignore
const TypedArrayFrom = uncurryThis(TypedArray.from) as (
  t: TypedArray,
  x: ArrayLike<number>
) => TypedArray;
export = TypedArrayFrom;
