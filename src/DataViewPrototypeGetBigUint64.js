/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.getBigUint64>) => ReturnType<typeof DataView.prototype.getBigUint64>} */
const DataViewPrototypeGetBigUint64 = Object.call.bind(
  DataView.prototype.getBigUint64
);
module.exports = DataViewPrototypeGetBigUint64;
