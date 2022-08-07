import React from "react";
import data from "../../../Resources/data/movie.json";

export const BookingOptions = (props) => {
    return (
        <>
            {data.map((movie)=>{
                return (
                    <option value={movie.id}>{movie.title}</option>
                )
            })}
        </>
    )
}
