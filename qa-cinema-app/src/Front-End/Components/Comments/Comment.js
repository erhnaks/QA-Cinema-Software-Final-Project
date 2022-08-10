require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var PostCommentRoutes = require("./Controllers/PostCommentController");

var app = express();

app.use(bodyParser.json());

app.listen(4000, () => console.log("listening on port : 4000 "));

app.use("/PostComments", PostCommentRoutes);
