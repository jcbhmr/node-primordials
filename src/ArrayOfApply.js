/**
 * @template T
 * @type {(
 *   a: Parameters<typeof Array.of<T>>
 * ) => ReturnType<typeof Array.of<T>>}
 */
const ArrayOfApply = Object.apply.bind(Array, Array.of);
module.exports = ArrayOfApply;
