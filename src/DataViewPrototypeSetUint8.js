/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setUint8>) => ReturnType<typeof DataView.prototype.setUint8>} */
const DataViewPrototypeSetUint8 = Object.call.bind(DataView.prototype.setUint8);
module.exports = DataViewPrototypeSetUint8;
