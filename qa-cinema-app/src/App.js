import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactUs from "./Front-End/Components/ContactUs/ContactUsPage";
import HomePage from "./Front-End/Components/HomePage/Home";
import AboutPage from "./Front-End/Components/AboutPage/About";
import Booking from "./Front-End/Components/BookingPage/Booking";
import AllListings from "./Front-End/Components/ListingsPage/AllListings";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/listings" element={<AllListings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
