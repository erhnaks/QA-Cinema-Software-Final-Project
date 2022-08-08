import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../../Resources/images/logo.png";

const Header = () => {
  return (
    <header className="container-fluid">
      <>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <img className="mx-4" id="logo" src={logo} alt="www.qacinema.com" />
          <h1 id="header_h1">QA Cinema</h1>
        </div>

        <Navbar className="row" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/listings">Listings</Nav.Link>
              <Nav.Link href="/comingsoon">New Releases</Nav.Link>
              <Nav.Link href="/openingtime">Opening Times</Nav.Link>
              <Nav.Link href="#features">Booking</Nav.Link>

              <Nav.Link href="#pricing">Opening Times</Nav.Link>

              <Nav.Link href="/screens">Screens</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/contactUs">Contact Us</Nav.Link>
              <Nav.Link href="/classifications">Classifications</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br></br>
      </>
    </header>
  );
};

export default Header;
