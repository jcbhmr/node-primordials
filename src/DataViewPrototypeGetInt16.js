/** @type {(that: DataView, ...a: Parameters<typeof DataView.prototype.getInt16>) => ReturnType<typeof DataView.prototype.getInt16>} */
const DataViewPrototypeGetInt16 = Object.call.bind(DataView.prototype.getInt16);
module.exports = DataViewPrototypeGetInt16;
