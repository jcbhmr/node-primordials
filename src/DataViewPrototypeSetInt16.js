/** @type {(this: DataView, ...a: Parameters<typeof DataView.prototype.setInt16>) => ReturnType<typeof DataView.prototype.setInt16>} */
const DataViewPrototypeSetInt16 = Object.call.bind(DataView.prototype.setInt16);
module.exports = DataViewPrototypeSetInt16;
