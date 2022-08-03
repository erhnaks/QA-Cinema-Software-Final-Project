import React, { Fragment } from "react";
import { useState } from "react";

const ContactUsForm = () => {
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <Fragment>
      <h1 className="contactUs"> Contact Us</h1>
    </Fragment>
  );
};

export default ContactUsForm;
