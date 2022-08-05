import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ContactUs from "./Front-End/Components/ContactUs/ContactUsPage";
import HomePage from "./Front-End/Components/HomePage/Home";
import AboutPage from "./Front-End/Components/AboutPage/About";
import AllListings from "./Front-End/Components/ListingsPage/AllListings";
import NewReleases from "./Front-End/Components/NewReleases/NewReleases";
import Screens from "./Front-End/Components/ScreensPage/Screens";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/listings" element={<AllListings />} />
          <Route path="/comingsoon" element={<NewReleases />} />
          <Route path="/screens" element={<Screens />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
