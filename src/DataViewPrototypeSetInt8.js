/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.setInt8>) => ReturnType<typeof DataView.prototype.setInt8>} */
const DataViewPrototypeSetInt8 = Object.call.bind(DataView.prototype.setInt8);
module.exports = DataViewPrototypeSetInt8;
