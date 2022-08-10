import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactUs from "./Front-End/Components/ContactUs/ContactUsPage";
import HomePage from "./Front-End/Components/HomePage/Home";
import AboutPage from "./Front-End/Components/AboutPage/About";
import Booking from "./Front-End/Components/BookingPage/Booking";
import AllListings from "./Front-End/Components/ListingsPage/AllListings";
import NewReleases from "./Front-End/Components/NewReleases/NewReleases";
import Places from "./Front-End/Components/Places/Places";
import OpeningTime from "./Front-End/Components/OpeningTime/OpeningTime";
import Classifications from "./Front-End/Components/Classifications/Classifications";
import Screens from "./Front-End/Components/ScreensPage/Screens";
import StripeContainer from "./Front-End/Components/Stripe/StripeContainer";
import GettingThere from "./Front-End/Components/GettingThere/GettingThere";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/listings" element={<AllListings />} />
          <Route path="/places" element={<Places />} />
          <Route path="/openingtime" element={<OpeningTime />} />
          <Route path="/comingsoon" element={<NewReleases />} />
          <Route path="/classifications" element={<Classifications />} />
          <Route path="/screens" element={<Screens />} />
<<<<<<< HEAD
          <Route path="/paymentForm" element={<StripeContainer />} />
=======
          <Route path="/gettingthere" element={<GettingThere />} />
>>>>>>> c7943d71fc3a5c70cf532d0233fcaa14984894e0
        </Routes>
      </Router>
    </div>
  );
}

export default App;
