import "../ListingsPage/Movies.css";
import React from "react";
import data from "../../../Resources/data/NewMovieReleases.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewReleasesMovies from "./NewReleasesMovies";
import "../../Components/ListingsPage/Movies.css";

const NewReleases = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <div className="row-md" id="NewMovieRelease-Header">
          <hr id="hr" />
          <h1>New Releases are coming this Bank Holiday!!!</h1>
          <hr id="hr" />
          <p>
            Welcome to the QA Cinema! Here you can find all of the movies that are
            coming soon!!! Book your Tickets Now!
          </p>
        </div>
        <div className="row">
          {data.map((movie, i) => (
            <div className="col-md-4" key={i}>
              <br />
              <NewReleasesMovies
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
      <br></br>
      <br></br>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default NewReleases;
