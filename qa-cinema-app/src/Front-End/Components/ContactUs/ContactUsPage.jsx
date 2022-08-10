import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactUsForm from "./ContactUsForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <body className="contactUs-body">
        <br></br>
        <br></br>
        <div className="container-contactUs">
          <div className="row-md">
            <hr className="contactUs-header-p" />
            <br></br>
            <h1 id="contactUs-h1">QA Cinema - Contact Us</h1>
            <hr />
            <p id="contactUs-p">
              Email us anytime and we'll get back to you as soon as possible.
            </p>
          </div>
          <ContactUsForm />
        </div>
        <br></br>
        <br></br>
      </body>
      <Footer />
    </>
  );
};

export default ContactUs;
