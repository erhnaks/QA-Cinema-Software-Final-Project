// import Navbar from "react-bootstrap/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Booking.css";
import { BookingOptions } from "./BookingOptions";
import { useState } from "react";
import StripeContainer from "../Stripe/StripeContainer";

const Booking = () => {

    const [movieId, setMovieId] = useState();
    const [showingTime, setShowingTime] = useState();
    const [ticketPrice, setTicketPrice] = useState();
    const [seatId, setSeatId] = useState();
    const [seatState, setSeatState] = useState('seat');
    const [movieName, setMovieName] = useState();
    const [seatSelections, setSeatSelections] = useState('d-none');

    const [ticket, setTicket] = useState([]);

    const totalCost = ticket.reduce((accumulator, object) => {
        return +accumulator + +object.ticketPrice;
    }, 0);


    const createTicket = (e) => {
        setSeatId(e.currentTarget.id);
        e.currentTarget.className = 'seat sold';
        e.currentTarget.disabled = true;
        setTicket([...ticket, {
            id: ticket.length,
            seat: e.currentTarget.id,
            movieId: movieId,
            movieName: movieName,
            ticketPrice: ticketPrice,
            showingTime: showingTime
        }])

    }


    const handleMovie = (e) => {
        setMovieId(e.target.value);
        setMovieName(e.target[e.target.selectedIndex].text);

    };

    const handleTime = (e) => {
        setShowingTime(e.target.value);

    }

    const handleTicketPrice = (e) => {
        setTicketPrice(e.target.value);
    }


    const ShowSeats = (e) => {
        e.preventDefault();
        if (movieId != null && showingTime != null && ticketPrice != null) {
            setSeatSelections();
        }

    }

    const [paymentForm, setPaymentForm] = useState('d-none');
    const showPaymentForm = () => {
        setPaymentForm();

    }


    return (
        <>

            <Header></Header>
            <div className="container-fluid" id="booking">
                <h1>Booking</h1>


                <form className="form-inline">
                    <div className="d-flex justify-content-between">


                        <div className="col-3">
                            <label className="my-1 mr-2"> Select a movie:</label>
                            <select className="form-control mr-sm-2" value={movieId} onChange={handleMovie} id="movie">
                                <option disabled selected value></option>
                                <BookingOptions></BookingOptions>
                            </select>
                        </div>

                        <div className="col-3">
                            <label className="my-1 mr-2"> Select time:</label>
                            <select className="form-control mr-sm-2" value={showingTime} onChange={handleTime} id="showing">
                                <option disabled selected value></option>
                                <option value="12:00">12:00</option>
                                <option value="15:00">15:00</option>
                                <option value="18:00">18:00</option>
                                <option value="21:00">21:00</option>

                            </select>
                        </div>
                        <div className="col-3">
                            <label className="my-1 mr-2"> Ticket Type:</label>
                            <select className="form-control mr-sm-2" value={ticketPrice} onChange={handleTicketPrice} id="ticket">
                                <option disabled selected value></option>
                                <option value="10.00">Adult £10</option>
                                <option value="5.00">Child £5</option>
                                <option value="7.00">Concession £7</option>
                                <option value="7.00">Disabled £7</option>

                            </select>
                        </div>
                    </div>
                    <div className="row m-3 d-flex justify-content-center">
                        
                    <button className="btn btn-secondary" onClick={ShowSeats} id="BookSeats">Book Seats</button>
                    
                    </div>
                </form>

                <ul className="showcase">
                    <li>
                        <button className={seatState}></button>
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
                        <button className={seatState}></button>
                        <small>Sold</small>
                    </li> */}

                </ul>
                <div id="screensContainer" className={`row d-flex justify-content-center align-items-center ${seatSelections}`}>
                    <div className="booking-container col-5">
                        <div className="screen"></div>

                        <div className="booking-row">

                            <button className="seat disabled" id="1A" onClick={createTicket}></button>
                            <button className="seat disabled" id="1B" onClick={createTicket}></button>
                            <button className="seat disabled" id="1C" onClick={createTicket}></button>
                            <button className="seat disabled" id="1D" onClick={createTicket}></button>
                            <button className={seatState} id="1E" onClick={createTicket}></button>
                            <button className={seatState} id="1F" onClick={createTicket}></button>
                            <button className="seat disabled" id="1G" onClick={createTicket}></button>
                            <button className="seat disabled" id="1H" onClick={createTicket}></button>
                        </div>

                        <div className="booking-row">
                            <button className={seatState} id="2A" onClick={createTicket}></button>
                            <button className={seatState} id="2B" onClick={createTicket}></button>
                            <button className={seatState} id="2C" onClick={createTicket}></button>
                            <button className={seatState} id="2D" onClick={createTicket}></button>
                            <button className={seatState} id="2E" onClick={createTicket}></button>
                            <button className={seatState} id="2F" onClick={createTicket}></button>
                            <button className={seatState} id="2G" onClick={createTicket}></button>
                            <button className={seatState} id="2H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className={seatState} id="3A" onClick={createTicket}></button>
                            <button className={seatState} id="3B" onClick={createTicket}></button>
                            <button className={seatState} id="3C" onClick={createTicket}></button>
                            <button className={seatState} id="3D" onClick={createTicket}></button>
                            <button className={seatState} id="3E" onClick={createTicket}></button>
                            <button className={seatState} id="3F" onClick={createTicket}></button>
                            <button className={seatState} id="3G" onClick={createTicket}></button>
                            <button className={seatState} id="3H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className={seatState} id="4A" onClick={createTicket}></button>
                            <button className={seatState} id="4B" onClick={createTicket}></button>
                            <button className={seatState} id="4C" onClick={createTicket}></button>
                            <button className={seatState} id="4D" onClick={createTicket}></button>
                            <button className={seatState} id="4E" onClick={createTicket}></button>
                            <button className={seatState} id="4F" onClick={createTicket}></button>
                            <button className={seatState} id="4G" onClick={createTicket}></button>
                            <button className={seatState} id="4H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className={seatState} id="5A" onClick={createTicket}></button>
                            <button className={seatState} id="5B" onClick={createTicket}></button>
                            <button className={seatState} id="5C" onClick={createTicket}></button>
                            <button className={seatState} id="5D" onClick={createTicket}></button>
                            <button className={seatState} id="5E" onClick={createTicket}></button>
                            <button className={seatState} id="5F" onClick={createTicket}></button>
                            <button className={seatState} id="5G" onClick={createTicket}></button>
                            <button className={seatState} id="5H" onClick={createTicket}></button>
                        </div>
                        <div className="booking-row">
                            <button className={seatState} id="6A" onClick={createTicket}></button>
                            <button className={seatState} id="6B" onClick={createTicket}></button>
                            <button className={seatState} id="6C" onClick={createTicket}></button>
                            <button className={seatState} id="6D" onClick={createTicket}></button>
                            <button className={seatState} id="6E" onClick={createTicket}></button>
                            <button className={seatState} id="6F" onClick={createTicket}></button>
                            <button className={seatState} id="6G" onClick={createTicket}></button>
                            <button className={seatState} id="6H" onClick={createTicket}></button>
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
                            {ticket.map(ticket => (
                                <tr>
                                    <th scope="row">{ticket.id + 1}</th>
                                    <td>{ticket.movieName}</td>
                                    <td>{ticket.showingTime}</td>
                                    <td>{ticket.seat}</td>
                                    <td>£{ticket.ticketPrice}</td>
                                </tr>

                            ))}
                            <tr>
                                <th scope="row">Total:</th>
                                <td colSpan="3"></td>
                                <td>£{totalCost}</td>
                            </tr>

                        </tbody>
                    </table>
                    <div className="row justify-content-end mb-3">
                        <button className="btn btn-primary col-2" onClick={showPaymentForm}>Confirm</button>
                    </div>
                </div>

                <div className={`row justify-content-center pb-4 ${paymentForm}`}>
                    <div className="col-6">
                        
                        <StripeContainer totalCost={totalCost} ticket={ticket} />
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )

}


export default Booking;
