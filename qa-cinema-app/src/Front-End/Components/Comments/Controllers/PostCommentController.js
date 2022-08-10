const express = require("express");
var router = express();

var { PostComment } = require("../models/PostComment");

router.get("/", (req, res) => {
  PostComment.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieving all records : " +
          JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
