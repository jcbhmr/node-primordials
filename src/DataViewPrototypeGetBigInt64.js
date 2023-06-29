/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.getBigInt64>) => ReturnType<typeof DataView.prototype.getBigInt64>} */
const DataViewPrototypeGetBigInt64 = Object.call.bind(
  DataView.prototype.getBigInt64
);
module.exports = DataViewPrototypeGetBigInt64;
