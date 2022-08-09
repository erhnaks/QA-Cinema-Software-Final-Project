import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const GettingThere = () => {
    return(
        <>
        <Header></Header>

        <br></br>

        <div className="container">
            <h1>Getting There</h1>

            <br></br>

            <div className="card col-4 p-3 drop-shadow">
            {/* Image  */}
            <h3 class="text-center">Spend your night at<br></br>QA Cinema</h3>
            <img src= "https://i.pinimg.com/originals/69/bf/c9/69bfc969d20e10ca2444e21d5c69f5aa.jpg"></img>
            </div>

            <br></br>

            <div className="card col-4 p-3 drop-shadow" id="qa-location">
            {/* Location */}
            <h3>Where to Find Us</h3>
            International House, 1 St Katharine's Way, London E1W 1UN
            <div>
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=e1w1UN&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                title="Location"
              ></iframe>
            </div>
            </div>

            <div className="row d-flex justify-content-around">
          <div className="card col-6 p-3 drop-shadow">
            {/* Getting There */}
            <h2 class="text-center">Getting there by Train:</h2>
            <hr />
            <h5 class="text-center">
            Both Erhan and Billy Stations are around an 18 minute walk from the 
            Cinema with services running directly from all London areas.
            </h5>
            <br></br><br></br>
            <h2 class="text-center">Getting there by Bus:</h2>
            <hr />
            <h5 class="text-center">
            The 2, 47, 49 and X2 buses all stop near QA Cinema.
            </h5>
            <br></br><br></br>
            <h2 class="text-center">Getting there in a Car:</h2>
            <hr />
            <h5 class="text-center">
            The main entrance to QA Cinema is 1 St Katharine S Way, London, E1W 1UN. There is car parking available.
            </h5>
            
          </div>
          </div>




        </div>
        
        <br></br>
        <br></br>
        <Footer></Footer>
        </>
    );
};
export default GettingThere;