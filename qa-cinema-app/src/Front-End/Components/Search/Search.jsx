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
        <div className="row d-flex justify-content-between mb-3">
          <hr></hr>
          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                // <div className="card-body col-2">
                //   <div className="template" key={val.img}>
                //     <img className="img" src={val.img} alt="" />
                //     <h3>{val.title}</h3>
                //     <hr></hr>
                //     <p className="description">{val.description}</p>
                //     <hr></hr>
                //     <p>Actors :</p>
                //     <p className="actors">{val.actors}</p>
                //     <hr></hr>
                //     <p className="director">Director : {val.director}</p>
                //     <hr></hr>
                //     <p className="runtime">Runtime : {val.runtime}</p>
                //     <hr></hr>
                //     <p className="rating">Rating : {val.rating}</p>
                //   </div>
                // </div>

                <div class="card bg-dark mb-3" style={{width: "18rem"}}>
                  <img class="card-img-top" src={val.img} alt="pic" />
                    <div class="card-body">
                      <h5 class="card-title">{val.title}</h5>
                      <p class="card-subtitle">{val.description}</p>
                      <hr/>
                      <p className="card-text">Actors: {val.actors}</p>
                      <p className="card-text">Director : {val.director}</p>
                      <p className="card-text">Runtime : {val.runtime}</p>
                      <p className="card-text">Rating : {val.rating}</p>
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
