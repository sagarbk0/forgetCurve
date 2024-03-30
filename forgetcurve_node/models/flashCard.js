const mongoose = require("mongoose");

const flashCardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: [true, "front is required"],
  },
  back: {
    type: String,
    required: [true, "back is required"],
  },
  hunt: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("flashCard", flashCardSchema);
