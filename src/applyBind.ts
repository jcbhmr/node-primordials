/**
 * @see https://github.com/nodejs/node/blob/v20.2.0/lib/internal/per_context/primordials.js#L26-L30
 */
// TODO: Add explicit type annotation to applyBind()
export const applyBind = Function.bind.bind(Function.apply);
