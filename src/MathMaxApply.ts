import applyBind from "./applyBind.js";

// @ts-ignore
const MathMaxApply = applyBind(Math.max, Math) as (a: number[]) => number;
export = MathMaxApply;
