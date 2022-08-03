import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage/About";
import ContactUsForm from "./Components/ContactUs/ContactUsForm";
import HomePage from "./Components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactUs" element={<ContactUsForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
