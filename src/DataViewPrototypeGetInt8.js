/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.getInt8>) => ReturnType<typeof DataView.prototype.getInt8>} */
const DataViewPrototypeGetInt8 = Object.call.bind(DataView.prototype.getInt8);
module.exports = DataViewPrototypeGetInt8;
