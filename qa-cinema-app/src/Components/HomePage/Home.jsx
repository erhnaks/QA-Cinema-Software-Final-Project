import Header from "../Header/Header";
import "./Home.css";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <>
      <Header></Header>;
      <body>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title id="home_title_card">Welcome to QA Cinema!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Home of the latest and greatest movies.{" "}
            </Card.Subtitle>
            <Card.Text id="home_page_card">
              QA cinema is dedicated to bringing movies to life through our
              innovative sound system and high-quality screens. Watch the latest
              movies with your feet up in our new renovated screens. Our highly
              rated screens include recliner seating and cupholders as well as a
              portable tray. Sweet or sour? We have everything taken care of to
              ensure a great experience at QA cinema. Book now to experience the
              magic.
            </Card.Text>
            <Card.Link href="#">Movies</Card.Link>
            <Card.Link href="#">Book Ticket Now!!!</Card.Link>
          </Card.Body>
        </Card>
      </body>
    </>
  );
};

export default HomePage;
