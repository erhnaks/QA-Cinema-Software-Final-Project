import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OpeningTime = () => {
  return (
    <>
    <Header></Header>

    <div className="container">
    <h1 class="text-center">"I'm the type of person who eats all the popcorn while they're still going through the trailers"</h1>
    </div>
    <br></br>

    <div className="row d-flex justify-content-around">
          <div className="card col-6 p-3 drop-shadow">
            {/* Actual opening timings */}
            <h2 class="text-center">Our Opening times are:</h2>
            <hr />
            <h5 class="text-center">
            Monday:    08:00 AM - 11:30 PM
            <br></br><br></br>
            Tuesday:   08:00 AM - 11:30 PM
            <br></br><br></br>
            Wednesday: 08:00 AM - 11:30 PM
            <br></br><br></br>
            Thursday:  08:00 AM - 11:30 PM
            <br></br><br></br>
            Friday:    08:00 AM - 11:30 PM
            <br></br><br></br>
            Saturday:  08:00 AM - 01:00 AM
            <br></br><br></br>
            Sunday:    09:00 AM - 11:00 PM
            </h5>
          </div>

         
          <div className="card col-4 p-3 drop-shadow">
            {/* Image  */}
            <h3 class="text-center">What are you waiting for?<br></br>Visit Us Today</h3>
            <h8 class="text-center">International House, 1 St Katharine's Way, London E1W 1UN</h8>
            <img src= "https://images.pexels.com/photos/3537844/pexels-photo-3537844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
          </div>
    </div>






    <Footer></Footer>
    </>
  );
  
};
export default OpeningTime;