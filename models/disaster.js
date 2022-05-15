const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let disaster = new Schema(
  {
    title: {
      type: String
    },
    date: {
      type: String
    },
    status: {
      type: String
    },
    description: {
      type: String
    },
    priority: {
      type: String
    },
  },
  { collection: "disaster" }
);

module.exports = mongoose.model("disaster", disaster);