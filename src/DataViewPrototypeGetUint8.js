/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.getUint8>) => ReturnType<typeof DataView.prototype.getUint8>} */
const DataViewPrototypeGetUint8 = Object.call.bind(DataView.prototype.getUint8);
module.exports = DataViewPrototypeGetUint8;
