const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaikhoanSchema = new Schema(
  {
    user: String,
    pass: String,
    tenGame: String,
  },
  {
    timestamps: true,
  }
);

const TaiKhoanModel = mongoose.model("account", TaikhoanSchema);

module.exports = TaiKhoanModel;
