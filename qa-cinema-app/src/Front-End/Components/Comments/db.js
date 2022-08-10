const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/commentManagerDB", (err) => {
  if (!err) console.log("Connection established");
  else
    console.log("Connection error MongoDB" + JSON.stringify(err, undefined, 2));
});
