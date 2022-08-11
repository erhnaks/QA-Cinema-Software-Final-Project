import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "react-bootstrap/Card";
import shakAvatar from "../../../Resources/images/shak_avatar.png";
import billyAvatar from "../../../Resources/images/billy_avatar.png";
import omarAvatar from "../../../Resources/images/omar_avatar.PNG";
import muhammadAvatar from "../../../Resources/images/muhammad_avatar.jpg";

const AboutUs = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <br></br>
      <br></br>
      <div className="container">
        <div className="row d-flex justify-content-between mb-3">
          <Card style={{ width: "18rem" }} className="bg-dark drop-shadow">
            <Card.Body>
              <Card.Img
                id="avatar"
                variant="top"
                src={billyAvatar}
                className="rounded-circle"
                width="70"
              />
              <Card.Title id="AboutUs-title">
                <h4>Billy M</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Product Owner
              </Card.Subtitle>
              <Card.Text>               
                  Billy enjoys long walks in the countryside and outdoor sports.             
              </Card.Text>
              <Card.Link
                href="https://github.com/BillyMillsGitHub"
                target="_blank"
              >
                GitHub Account
              </Card.Link>
              <Card.Link href="http://localhost:3027" target="_blank">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="bg-dark drop-shadow">
            <Card.Body>
              <Card.Img
                id="avatar"
                variant="top"
                src="https://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/R2D2-01-icon.png"
                className="rounded-circle"
                width="70"
              />
              <Card.Title id="AboutUs-title">
                <h4>Erhan A</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Development Team
              </Card.Subtitle>
              <Card.Text>
                Erhan enjoys cooking, driving and coding.
              </Card.Text>
              <Card.Link href="https://github.com/erhnaks" target="_blank">
                GitHub Account
              </Card.Link>
              <Card.Link href="http://localhost:3027" target="_blank">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="bg-dark drop-shadow">
            <Card.Body>
              <Card.Img
                id="avatar"
                variant="top"
                src={muhammadAvatar}
                className="rounded-circle"
                width="70"
              />
              <Card.Title id="AboutUs-title">
                <h4>Muhammad R</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Development Team
              </Card.Subtitle>
              <Card.Text>
                Muhammad enjoys football and travelling.
              </Card.Text>
              <Card.Link
                href="https://github.com/MuhammadShayekurRahman"
                target="_blank"
              >
                GitHub Account
              </Card.Link>
              <Card.Link href="http://localhost:3027" target="_blank">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="bg-dark drop-shadow">
            <Card.Body>
              <Card.Img
                id="avatar"
                variant="top"
                src={omarAvatar}
                className="rounded-circle"
                width="70"
              />
              <Card.Title id="AboutUs-title">
                <h4>Omar M</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Scrum Master
              </Card.Subtitle>
              <Card.Text>               
                  Omar enjoys computer gaming, bowling and trips to the cinema.              
              </Card.Text>
              <Card.Link
                href="https://github.com/OmarMalikGithub"
                target="_blank"
              >
                GitHub Account
              </Card.Link>
              <Card.Link href="http://localhost:3027" target="_blank">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Card>
          <br></br>
        </div>
        <div className="row d-flex justify-content-center mb-3">
          <Card style={{ width: "18rem" }} className="bg-dark drop-shadow">
            <Card.Body>
              <Card.Img
                id="avatar"
                variant="top"
                src={shakAvatar}
                className="rounded-circle"
                width="70"
              />
              <Card.Title id="AboutUs-title">
                <h4>Shakir A</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Development Team
              </Card.Subtitle>
              <Card.Text>
                Shakir enjoys football and making TikToks.
              </Card.Text>
              <Card.Link
                href="https://github.com/shakir-ali-Github"
                target="_blank"
              >
                GitHub Account
              </Card.Link>
              <Card.Link href="http://localhost:3027" target="_blank">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default AboutUs;
