/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.getUint16>) => ReturnType<typeof DataView.prototype.getUint16>} */
const DataViewPrototypeGetUint16 = Object.call.bind(
  DataView.prototype.getUint16
);
module.exports = DataViewPrototypeGetUint16;
