require("./db");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.listen(3100, () => console.log("listening on port : 3100 "));
