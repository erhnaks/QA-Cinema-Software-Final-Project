// import Navbar from "react-bootstrap/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Booking.css";
import { BookingOptions } from "./BookingOptions";
import { useState } from "react";

const Booking = () => {

    // const seatButton = document.querySelector(".booking-row > button");
    // seatButton.addEventListener("click", () => {
    //     alert("Booking selected");
    // });
    const [movieId, setMovieId] = useState();

    const toggle = (event) => {

        const movieSelected = document.getElementById("movie");
        console.log("Movie id: " + movieSelected.value);

        const showingSelected = document.getElementById("showing");
        console.log("Showing time: " + showingSelected.value);

        const ticketSelected = document.getElementById("ticket");
        console.log("Ticket time: " + ticketSelected.value);

        console.log(event.currentTarget.id);
        // console.log(seatId);
    }

    return (
        <>

            <Header></Header>
            <div className="container-fluid" id="booking">
                <h1>Booking</h1>


                <div className="movie-container">
                    <label> Select a movie:</label>
                    <select id="movie">
                        <BookingOptions></BookingOptions>
                    </select>
                    <br />
                    <label> Select time:</label>
                    <select id="showing">
                        <option value="12">12:00</option>
                        <option value="15">15:00</option>
                        <option value="18">18:00</option>
                        <option value="21">21:00</option>

                    </select>
                    <br />
                    <label> Ticket Type:</label>
                    <select id="ticket">
                        <option value="10">Adult £10</option>
                        <option value="5">Child £5</option>
                        <option value="7">Concession £7</option>
                        <option value="7">Disabled £7</option>

                    </select>
                </div>

                <ul className="showcase">
                    <li>
                        <button className="seat"></button>
                        <small>Available</small>
                    </li>
                    <li>
                        <button className="seat concession"></button>
                        <small>Concession</small>
                    </li>
                    <li>
                        <button className="seat disabled"></button>
                        <small>Disabled</small>
                    </li>
                    <li>
                        <button className="seat selected"></button>
                        <small>Selected</small>
                    </li>

                    {/* Removed sold seats func, will add back depending on time */}

                    {/* <li>
                        <button className="seat"></button>
                        <small>Sold</small>
                    </li> */}

                </ul>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="booking-container col-5">
                        <div className="screen"></div>

                        <div className="booking-row">
                            
                            <button className="seat disabled" id="1A" onClick={toggle}></button>
                            <button className="seat disabled"></button>
                            <button className="seat disabled"></button>
                            <button className="seat disabled"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat disabled"></button>
                            <button className="seat disabled"></button>
                        </div>

                        <div className="booking-row">
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                            <button className="seat"></button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )

}


export default Booking;
