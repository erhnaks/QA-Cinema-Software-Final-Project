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
    const [showingTime, setShowingTime] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [seatId, setSeatId] = useState();

    const createTicket = (e) => {
        setSeatId(e.currentTarget.id);
    }

    // const createTicket = () => {


    // }

    const handleMovie = (e) => {
        setMovieId(e.target.value);
    };

    const handleTime = (e) => {
        setShowingTime(e.target.value);

    }

    const handleTicketPrice = (e) => {
        setTicketPrice(e.target.value);
    }


    // const toggle = (event) => {

    //     const movieSelected = document.getElementById("movie");
    //     console.log("Movie id: " + movieSelected.value);

    //     const showingSelected = document.getElementById("showing");
    //     console.log("Showing time: " + showingSelected.value);

    //     const ticketSelected = document.getElementById("ticket");
    //     console.log("Ticket time: " + ticketSelected.value);

    //     console.log(event.currentTarget.id);
    //     // console.log(seatId);
    // }

    return (
        <>

            <Header></Header>
            <div className="container-fluid" id="booking">
                <h1>Booking</h1>


                <div className="movie-container">
                    <label> Select a movie:</label>
                    <select value={movieId} onChange={handleMovie} id="movie">
                        <option disabled selected value></option>
                        <BookingOptions></BookingOptions>
                    </select>
                    <h1>You have selected: {movieId}</h1>
                    <h1>You have selected: {showingTime}</h1>
                    <h1>You have selected: {ticketPrice}</h1>
                    <br />
                    <label> Select time:</label>
                    <select value={showingTime} onChange={handleTime} id="showing">
                        <option disabled selected value></option>
                        <option value="12">12:00</option>
                        <option value="15">15:00</option>
                        <option value="18">18:00</option>
                        <option value="21">21:00</option>

                    </select>
                    <br />
                    <label> Ticket Type:</label>
                    <select value={ticketPrice} onChange={handleTicketPrice} id="ticket">
                        <option disabled selected value></option>
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

                            <button className="seat disabled" id="1A" onClick={createTicket}></button>
                            <button className="seat disabled" id="1B" onClick={createTicket}></button>
                            <button className="seat disabled" id="1C" onClick={createTicket}></button>
                            <button className="seat disabled" id="1D" onClick={createTicket}></button>
                            <button className="seat" id="seat1E" onClick={createTicket}></button>
                            <button className="seat" id="1F" onClick={createTicket}></button>
                            <button className="seat disabled" id="1G" onClick={createTicket}></button>
                            <button className="seat disabled" id="1H" onClick={createTicket}></button>
                        </div>

                        <div className="booking-row">
                            <button className="seat" id="2A" onClick={createTicket}></button>
                            <button className="seat" id="2B" onClick={createTicket}></button>
                            <button className="seat" id="2C" onClick={createTicket}></button>
                            <button className="seat" id="2D" onClick={createTicket}></button>
                            <button className="seat" id="2E" onClick={createTicket}></button>
                            <button className="seat" id="2F" onClick={createTicket}></button>
                            <button className="seat" id="2G" onClick={createTicket}></button>
                            <button className="seat" id="2H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat" id="3A" onClick={createTicket}></button>
                            <button className="seat" id="3B" onClick={createTicket}></button>
                            <button className="seat" id="3C" onClick={createTicket}></button>
                            <button className="seat" id="3D" onClick={createTicket}></button>
                            <button className="seat" id="3E" onClick={createTicket}></button>
                            <button className="seat" id="3F" onClick={createTicket}></button>
                            <button className="seat" id="3G" onClick={createTicket}></button>
                            <button className="seat" id="3H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat" id="4A" onClick={createTicket}></button>
                            <button className="seat" id="4B" onClick={createTicket}></button>
                            <button className="seat" id="4C" onClick={createTicket}></button>
                            <button className="seat" id="4D" onClick={createTicket}></button>
                            <button className="seat" id="4E" onClick={createTicket}></button>
                            <button className="seat" id="4F" onClick={createTicket}></button>
                            <button className="seat" id="4G" onClick={createTicket}></button>
                            <button className="seat" id="4H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat" id="5A" onClick={createTicket}></button>
                            <button className="seat" id="5B" onClick={createTicket}></button>
                            <button className="seat" id="5C" onClick={createTicket}></button>
                            <button className="seat" id="5D" onClick={createTicket}></button>
                            <button className="seat" id="5E" onClick={createTicket}></button>
                            <button className="seat" id="5F" onClick={createTicket}></button>
                            <button className="seat" id="5G" onClick={createTicket}></button>
                            <button className="seat" id="5H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className="seat" id="6A" onClick={createTicket}></button>
                            <button className="seat" id="6B" onClick={createTicket}></button>
                            <button className="seat" id="6C" onClick={createTicket}></button>
                            <button className="seat" id="6D" onClick={createTicket}></button>
                            <button className="seat" id="6E" onClick={createTicket}></button>
                            <button className="seat" id="6F" onClick={createTicket}></button>
                            <button className="seat" id="6G" onClick={createTicket}></button>
                            <button className="seat" id="6H" onClick={createTicket}></button>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <h4>Tickets:</h4>

                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Movie</th>
                                <th scope="col">Time</th>
                                <th scope="col">Seat</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{movieId}</td>
                                <td>{showingTime}</td>
                                <td>{seatId}</td>
                                <td>{ticketPrice}</td>
                            </tr>

                            <tr>
                                <th scope="row">Total:</th>
                                <td colSpan="3"></td>
                                <td>10.99</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    <div className="row justify-content-end mb-3">
                    <button className="btn btn-primary col-2">Purchase Now</button>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )

}


export default Booking;
