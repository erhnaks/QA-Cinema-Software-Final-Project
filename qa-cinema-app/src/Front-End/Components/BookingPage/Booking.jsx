// import Navbar from "react-bootstrap/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Booking.css";
import { BookingOptions } from "./BookingOptions";

const Booking = () => {

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
                </div>

                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>Available</small>
                    </li>
                    <li>
                        <div className="seat concession"></div>
                        <small>Concession</small>
                    </li>
                    <li>
                        <div className="seat disabled"></div>
                        <small>Disabled</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat sold"></div>
                        <small>Sold</small>
                    </li>
                    
                </ul>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="booking-container col-5">
                        <div className="screen"></div>

                        <div className="booking-row">
                            <div className="seat disabled"></div>
                            <div className="seat disabled"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat disabled"></div>
                            <div className="seat disabled"></div>
                        </div>

                        <div className="booking-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="booking-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                        </div>
                        <div className="booking-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="booking-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                        </div>
                        <div className="booking-row">
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                            <div className="seat sold"></div>
                            <div className="seat"></div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )

}


export default Booking;
