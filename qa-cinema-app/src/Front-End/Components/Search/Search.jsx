import React, { useState } from "react";
import "../Search/SearchStyle.css";
import data from "./SearchData.json";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header></Header>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="searchInput_Container">
            <input
              id="searchInput"
              type="text"
              placeholder="Search term..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-row mb-3">
          <hr></hr>
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, i) => {
              return (
      
                <div className="col-3" key={i}>
                <div className="card bg-dark mb-3" style={{width: "18rem"}}>
                  <img className="card-img-top" src={val.img} alt="pic" />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-subtitle">{val.description}</p>
                      <hr/>
                      <p className="card-text">Actors: {val.actors}</p>
                      <p className="card-text">Director : {val.director}</p>
                      <p className="card-text">Runtime : {val.runtime}</p>
                      <p className="card-text">Rating : {val.rating}</p>
                    </div>
                </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Search;
