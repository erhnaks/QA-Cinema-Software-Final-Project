import React, { Fragment } from "react";
import { useState } from "react";
import "./ContactUs.css";

const ContactUsForm = () => {
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <h1
        className="contact-h1
"
      >
        {" "}
        Contact Us{" "}
      </h1>
      <hr></hr>
      <div className="form-div">
        <form>
          <br />

          <from>
            <label>Subject: </label>
            <input
              type="text"
              subject="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <br />

            <label>Details:</label>
            <textarea
              className="form-details"
              type="text"
              body="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <br />

            <div className="send">
              <a
                className="send"
                href={`mailto:teamFoxtrot@qa-cinema.com?subject=${subject}&body=${body}`}
              >
                Send
              </a>
            </div>
          </from>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
