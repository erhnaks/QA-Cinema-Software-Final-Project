import Header from "../Header/Header";
import "./Home.css";
import Card from "react-bootstrap/Card";
import cinema from "../../../Resources/images/qacinema.jpg";
import CarouselPage from "./Carousel";
import movie1 from "../../../Resources/images/movie1.jpg";
import movie2 from "../../../Resources/images/movie2.jpeg";
import movie3 from "../../../Resources/images/movie3.jpg";
import movie4 from "../../../Resources/images/movie4.jpg";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header></Header>
      <body className="body">
        <br></br>
        <CarouselPage
          image1={movie1}
          image2={movie2}
          image3={movie3}
          image4={movie4}
        />
        <br></br>

        <div class="row">
          <Card className="card-body" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title id="home_title_card">
                Welcome to QA Cinema!
              </Card.Title>
              <p></p>
              <Card.Subtitle className="mb-2 text-muted">
                Home of the latest and greatest movies. <p></p>
              </Card.Subtitle>
              <Card.Text className="home_page_card">
                QA cinema is dedicated to bringing movies to life through our
                innovative sound system and high-quality screens. Watch the
                latest movies with your feet up in our new renovated screens.
                Our highly rated screens include recliner seating and cupholders
                as well as a portable tray. Sweet or sour? We have everything
                taken care of to ensure a great experience at QA cinema. Book
                now to experience the magic.
              </Card.Text>
              <Card.Link href="listings">Movies</Card.Link>
              <Card.Link href="/bookings">Book Ticket Now!!!</Card.Link>
            </Card.Body>
          </Card>
          <img id="cinema_img" src={cinema} alt="qacinema"></img>
        </div>
        <br></br>
        <br></br>

        <Footer></Footer>
      </body>
    </>
  );
};

export default HomePage;
