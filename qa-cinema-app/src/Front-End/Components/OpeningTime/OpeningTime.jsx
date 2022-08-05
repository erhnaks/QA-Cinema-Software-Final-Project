import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OpeningTime = () => {
  return (
    <>
    <Header></Header>

    <div className="container">
    <h1>Opening Times</h1>
    </div>

    <div className="row d-flex justify-content-around">
          <div className="card col-6 p-3 drop-shadow">
            {/* General Information about US */}
            <h3>Our Opening times are:</h3>
            Monday:    08:00 AM - 11:30 PM
            <br></br>
            Tuesday:   08:00 AM - 11:30 PM
            <br></br>
            Wednesday: 08:00 AM - 11:30 PM
            <br></br>
            Thursday:  08:00 AM - 11:30 PM
            <br></br>
            Friday:    08:00 AM - 11:30 PM
            <br></br>
            Saturday:  08:00 AM - 01:00 AM
            <br></br>
            Sunday:    09:00 AM - 11:00 PM
          </div>
    </div>






    <Footer></Footer>
    </>
  );
  
};
export default OpeningTime;