import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const OpeningTime = () => {
  return (
    <>
    <Header></Header>

    <br></br>

    <div className="container">
    <figure class="text-center">
            <blockquote class="blockquote">
              <p>
              "I am the type of person who eats all the popcorn while they're still going through the trailers"
              </p>
            </blockquote>
            <figcaption class="blockquote-footer">
              <cite title="Source Title">Everyone Ever</cite>
            </figcaption>
          </figure>
    </div>
    <br></br>

    <div className="row d-flex justify-content-around">
          <div className="card col-6 p-3 drop-shadow bg-dark text-white">
            {/* Actual opening timings */}
            <h2 class="text-center">Our Opening Times</h2>
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

         
          <div className="card col-4 p-3 drop-shadow bg-dark text-white">
            {/* Image  */}
            <h3 class="text-center">What are you waiting for?<br></br>Visit Us Today</h3>
            <h8 class="text-center">International House, 1 St Katharine's Way, London E1W 1UN</h8>
            <br/>
            <img src= "https://images.pexels.com/photos/3537844/pexels-photo-3537844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Popcorn"></img>
          </div>
    </div>
    <br></br>
    <br></br>


    <Footer></Footer>
    </>
  );
  
};
export default OpeningTime;