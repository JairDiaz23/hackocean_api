const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let multimedia = new Schema(
  {
    name: {
      type: String
    },
    multimediaType: {
      type: String
    },
    uri: {
      type: String
    }
  },
  { collection: "multimedia" }
);

module.exports = mongoose.model("multimedia", multimedia);