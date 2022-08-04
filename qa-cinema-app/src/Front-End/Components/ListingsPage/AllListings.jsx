import React from "react";
import ListingMovie from "../ListingsPage/ListingMovie";
import data from "../../../Resources/data/movie.json";

const AllListings = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row-md" id="movieListing-Header">
          <hr id="hr" />
          <h2>Movies on Show NOW!!! </h2>
          <hr id="hr" />
          <p>
            Welcome to the QA Cinema! Here you can find all of movies that are
            on show! Book your Ticket Now!
          </p>
        </div>
        <div className="row">
          {data.map((movie) => (
            <div className="col-md-4">
              <br />
              <ListingMovie
                key={movie.id}
                title={movie.title}
                runtime={movie.runtime}
                rating={movie.rating}
                poster={movie.img}
                description={movie.description}
                director={movie.director}
                actors={movie.actors}
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AllListings;
