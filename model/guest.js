const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Guest = new Schema(
  {
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("guest", Guest);
