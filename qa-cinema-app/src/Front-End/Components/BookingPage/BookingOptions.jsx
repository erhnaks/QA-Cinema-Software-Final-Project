import React from "react";
import data from "../../../Resources/data/movie.json";

export const BookingOptions = (props) => {
    return (
        <>
            {data.map((movie, i)=>{
                return (
                    <option value={movie.id} key={i}>{movie.title}</option>
                )
            })}
        </>
    )
}
