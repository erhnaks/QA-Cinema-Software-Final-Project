const mongoose = require("mongoose");

var PostComment = mongoose.model(
  "PostComment",

  {
    title: { type: "string", required: true },
    name: { type: "string", required: true },
    message: { type: "string", required: true },
    rating: { type: "string" },
  }
);

module.exports = PostComment;