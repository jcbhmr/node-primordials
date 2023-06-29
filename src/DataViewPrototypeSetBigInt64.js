/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setBigInt64>) => ReturnType<typeof DataView.prototype.setBigInt64>} */
const DataViewPrototypeSetBigInt64 = Object.call.bind(
  DataView.prototype.setBigInt64
);
module.exports = DataViewPrototypeSetBigInt64;
