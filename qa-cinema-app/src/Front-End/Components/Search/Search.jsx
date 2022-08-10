import React, {useState} from "react";
import '../Search/SearchStyle.css';
import data from "./SearchData.json";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search here for movies..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>
        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.img}>
                      <img src={val.img} alt="" />
                      <h3>{val.title}</h3>
                      <hr></hr>
                      <p className="description">{val.description}</p>
                      <hr></hr>
                      <p>Actors :</p>
                      <p className="actors">{val.actors}</p>
                      <hr></hr>
                      <p className="director">Director : {val.director}</p>
                      <hr></hr>
                      <p className="rating">Rating : {val.rating}</p>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;