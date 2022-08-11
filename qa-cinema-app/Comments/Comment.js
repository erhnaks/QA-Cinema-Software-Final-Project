require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var PostCommentRoutes = require("./Controllers/PostCommentController");

var app = express();

app.use(bodyParser.json());

app.listen(3100, () => console.log("listening on port : 3100 "));

app.use("/PostComments", PostCommentRoutes);
