import React from "react";
import ListingMovie from "../ListingsPage/ListingMovie";
import data from "../../../Resources/data/movie.json";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AllListings = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <div className="row-md" id="movieListing-Header">
          <hr id="hr" />
          <h1>Movies on Show NOW!!! </h1>
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
                showtime={movie.showtime}
                description={movie.description}
                director={movie.director}
                actors={movie.actors}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default AllListings;
