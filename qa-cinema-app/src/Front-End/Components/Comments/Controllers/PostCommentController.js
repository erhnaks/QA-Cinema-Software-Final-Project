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
    var newRecord = new PostComment({
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

  router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("No record with given id : " + req.params.id);

    var updatedRecord = {
      title: req.body.title,
      name: req.body.name,
      message: req.body.message,
      rating: req.body.rating,
    };

    PostComment.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true },
      (err, docs) => {
        if (!err) res.send(docs);
        else
          console.log(
            "Error while updating a record : " +
              JSON.stringify(err, undefined, 2)
          );
      }
    );
  });

  router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("No record with given id : " + req.params.id);

    PostComment.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while deleting a record : " + JSON.stringify(err, undefined, 2)
        );
    });
  });


});

module.exports = router;
