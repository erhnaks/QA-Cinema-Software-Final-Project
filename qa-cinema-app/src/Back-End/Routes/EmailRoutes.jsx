const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", () => {
  resizeBy.send("Welcome to the email server");
});

app.post("/api/form", (req, res) => {
  let data = reg.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "qacinemafoxtrot@gmail.com",
      pass: 'bemos.2022'
    },
  });

  


});
