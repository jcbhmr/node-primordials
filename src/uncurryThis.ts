/**
 * @see https://github.com/nodejs/node/blob/v20.2.0/lib/internal/per_context/primordials.js#L19-L24
 */
// TODO: Add explicit type annotation to uncurryThis()
export const uncurryThis = Function.bind.bind(Function.call);
