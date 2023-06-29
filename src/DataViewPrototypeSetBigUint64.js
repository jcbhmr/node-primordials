/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.setBigUint64>) => ReturnType<typeof DataView.prototype.setBigUint64>} */
const DataViewPrototypeSetBigUint64 = Object.call.bind(
  DataView.prototype.setBigUint64
);
module.exports = DataViewPrototypeSetBigUint64;
