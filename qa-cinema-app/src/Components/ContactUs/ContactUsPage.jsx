import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <Header />
      <ContactUsForm />
      <Footer/>
    </div>
  );
};

export default ContactUs;
