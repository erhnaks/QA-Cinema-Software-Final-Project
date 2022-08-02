import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <h1 id="header">QA Cinema</h1>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Listings</Nav.Link>
            <Nav.Link href="#features">Booking</Nav.Link>
            <Nav.Link href="#pricing">Classifications</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default HomePage;
