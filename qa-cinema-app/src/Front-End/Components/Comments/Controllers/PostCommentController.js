const express = require("express");
var router = express();
var ObjectID = require("mongoose").Types.ObjectId;

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

  router.post("/", (req, res) => {
    var newRecord = new PostMessage({
      title: req.body.title,
      name: req.body.name,
      message: req.body.message,
      rating: req.body.rating,
    });

    newRecord.save((err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while creating new record : " +
            JSON.stringify(err, undefined, 2)
        );
    });
  });


});

module.exports = router;
