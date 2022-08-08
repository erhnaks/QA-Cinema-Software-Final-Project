import React from "react";
import PlacesList from "../Places/PlacesList";
import data from "../../../Resources/data/placesToGo.json";
import "./Places.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const Places = () => {
  return (
    <React.Fragment>
      <Header></Header>
<div className="container">
        <div className="row-md" id="movieListing-Header">
          <hr id="hr" />
          <h1>Places To Go </h1>
          <hr id="hr" />
<p> 
    Here you can find a list of venues to visit whilst you are exploring the local area.
</p>
        </div>
        <div className="row">
          {data.map((places) => (
            <div className="col-md-4">
              <br />
              <PlacesList
                key={places.id}
                name={places.name}
                poster={places.img}
                description={places.description}
                offers={places.offers}
                contactDetails={places.contactDetails}
                venueType={places.venueType}
              />
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
    <Footer></Footer>
</React.Fragment>
  );
};
export default Places;