/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.getFloat64>) => ReturnType<typeof DataView.prototype.getFloat64>} */
const DataViewPrototypeGetFloat64 = Object.call.bind(
  DataView.prototype.getFloat64
);
module.exports = DataViewPrototypeGetFloat64;
