/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setUint16>) => ReturnType<typeof DataView.prototype.setUint16>} */
const DataViewPrototypeSetUint16 = Object.call.bind(
  DataView.prototype.setUint16
);
module.exports = DataViewPrototypeSetUint16;
