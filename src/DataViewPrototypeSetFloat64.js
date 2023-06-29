/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setFloat64>) => ReturnType<typeof DataView.prototype.setFloat64>} */
const DataViewPrototypeSetFloat64 = Object.call.bind(
  DataView.prototype.setFloat64
);
module.exports = DataViewPrototypeSetFloat64;
