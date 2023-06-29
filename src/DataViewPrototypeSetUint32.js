/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setUint32>) => ReturnType<typeof DataView.prototype.setUint32>} */
const DataViewPrototypeSetUint32 = Object.call.bind(
  DataView.prototype.setUint32
);
module.exports = DataViewPrototypeSetUint32;
