/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.setInt32>) => ReturnType<typeof DataView.prototype.setInt32>} */
const DataViewPrototypeSetInt32 = Object.call.bind(DataView.prototype.setInt32);
module.exports = DataViewPrototypeSetInt32;
