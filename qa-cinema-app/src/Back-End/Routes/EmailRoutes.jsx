const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { request } = require("express");
const SMTPPool = require("nodemailer/lib/smtp-pool");

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
      pass: "bemos.2022",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "qacinemafoxtrot@gmail.com",
    subject: `Message from QA Cinema ${data.name}`,
    html: `
    <h3>Customer Informations</h3>

    <ul>
    <li>Name: ${data.name}</li>
    <li>Surname: ${data.surname}</li>
    <li>Email: ${data.email}</li>
    </ul>

    <h3>Customer Message</h3>
    <p>${data.message}</p>     `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success! ");
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server starting at port ${PORT}`);
});
