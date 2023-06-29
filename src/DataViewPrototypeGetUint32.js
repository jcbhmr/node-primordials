/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.getUint32>) => ReturnType<typeof DataView.prototype.getUint32>} */
const DataViewPrototypeGetUint32 = Object.call.bind(
  DataView.prototype.getUint32
);
module.exports = DataViewPrototypeGetUint32;
