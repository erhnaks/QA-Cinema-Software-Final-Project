import Header from "../Header/Header";
import "./Home.css";
import Card from "react-bootstrap/Card";
import cinema from "../images/qacinema.jpg";
import CarouselPage from "./Carousel";
import movie1 from "../images/movie1.jpg";
import movie2 from "../images/movie2.png";
import movie3 from "../images/movie3.jpg";
import movie4 from "../images/movie4.jpg";

const HomePage = () => {
  return (
    <>
      <Header></Header>;
      <body>
        <div class="row">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title id="home_title_card">
                Welcome to QA Cinema!
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Home of the latest and greatest movies.{" "}
              </Card.Subtitle>
              <Card.Text id="home_page_card">
                QA cinema is dedicated to bringing movies to life through our
                innovative sound system and high-quality screens. Watch the
                latest movies with your feet up in our new renovated screens.
                Our highly rated screens include recliner seating and cupholders
                as well as a portable tray. Sweet or sour? We have everything
                taken care of to ensure a great experience at QA cinema. Book
                now to experience the magic.
              </Card.Text>
              <Card.Link href="#">Movies</Card.Link>
              <Card.Link href="#">Book Ticket Now!!!</Card.Link>
            </Card.Body>
          </Card>
          <img id="cinema_img" src={cinema} alt="qacinema"></img>
        </div>
        <br></br>
        <br></br>
        <CarouselPage
          image1={movie1}
          image2={movie2}
          image3={movie3}
          image4={movie4}
        />
      </body>
    </>
  );
};

export default HomePage;
