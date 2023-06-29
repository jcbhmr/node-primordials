/**
 * @type {(
 *   that: Array,
 *   a: Parameters<typeof Array.prototype.push>
 * ) => ReturnType<typeof Array.prototype.push>}
 */
const ArrayPrototypePushApply = Object.apply.bind(Array.prototype.push);
module.exports = ArrayPrototypePushApply;
