import React, { Fragment } from "react";
import { useState } from "react";

const ContactUsForm = () => {
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <>
      <h1 className="contactUs"> Contact Us </h1>
      <hr></hr>
      <div className="form-div">
        <form>
          <br />

          <from>
            <label>Subject</label>
            <input
              className="contactUs-form"
              type="text"
              subject="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <br />

            <label className="contactUs-form-controller" size="large">
              Details
            </label>
            <input
              className="form-details"
              type="text"
              body="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <br />

            <div className="send">
              <a
                className="send"
                href={`mailto:teamFoxtrot@example.com?subject=${subject}&body=${body}`}
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
