import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Classifications/Classifications.css";
import tbc from "./Images/bbfc-tbc-generic_rgb-200px.png";
import Universal from "./Images/bbfc-U.png";
import PG from "./Images/bbfc-pg_rgb-200px.png";
import TwelveA from "./Images/12A.png";
import fifteen from "./Images/15.png";
import eighteen from "./Images/eighteen.png";

const Classifications = () => {
  return (
    <React.Fragment>
      <Header></Header>

      
        <div className="container-fluid" id="screensContainer">
        <h1 className="h1-classifications">Classifications</h1>

        <hr></hr>
        <p className="p-tag">
          All film classification decisions are based on the British Board of
          Film Classification's (BBFC) published and regularly updated
          guidelines.
        </p>
        <p className="p-tag">
          For more detailed information about BBFC rulings, and for information
          for parents regarding film classifications and their suitability,
          please visit British Board of Film Classification official website on:
          <br></br> <br></br>
          <a
            rel="noreferrer"
            href="http://www.bbfc.co.uk/"
            target="_blank"
            className="externalLink ActivLink"
            data-treelink="0"
            data-documentlink="0"
            data-urllink="1"
            data-anchorlink="0"
          >
            <span>www.bbfc.co.uk</span> (opens in a new window).
          </a>
        </p>
        <hr></hr>
        <h5 className="h5-tag">
          Please click on each classification for more information!
        </h5>
        <br></br>
        </div>
        <Accordion defaultActiveKey="">
          <Accordion.Item eventKey="0">
            <Accordion.Header><p>TBC- To Be Confirmed </p> </Accordion.Header>
            <Accordion.Body>
              <img src={tbc} alt="tbc"></img>
              <p></p>
              In some instances films have not been certified by the time
              tickets are available online.
              <br></br>
              Child and Family tickets purchased before a film is certified as
              15 or over can be refunded. Please contact Guest Services before
              the performance for a refund, as admission may be refused on the
              day.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><p>
              U - Universal - Suitable For All Ages</p>
            </Accordion.Header>
            <Accordion.Body>
              <img src={Universal} alt="universal"></img>
              <p></p>
              Suitable for all. A U film should be suitable for audiences aged
              four years and over.
              <p>
                Please visit British Board of Film Classification for more
                information.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><p>PG - Parental Guidance</p></Accordion.Header>
            <Accordion.Body>
              <img src={PG} alt="PG"></img>
              <p></p>
              General viewing, but some scenes may be unsuitable for young
              children. A PG film should not unsettle a child aged around eight
              or older.
              <p>
                Please visit British Board of Film Classification for more
                information.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><p>
              12A - 12 Years Old And With Parental Guidance </p>
            </Accordion.Header>
            <Accordion.Body>
              <img src={TwelveA} alt="twelve"></img>
              <p></p>
              12A means that the BBFC have classified the film unsuitable for
              children under 12. However, they may still watch the film, as long
              as they are accompanied by someone over 18 at all times during the
              showing.
              <br></br>
              Advice is given regarding the content of the film and the ADULT
              must decide if it is appropriate for the accompanying under 12.
              Please note: proof of age may be required.
              <p>
                Please visit British Board of Film Classification for more
                information.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header><p>
              15 - Suitable only for 15 years and over</p>
            </Accordion.Header>
            <Accordion.Body>
              <img src={fifteen} alt="fifteen"></img>
              <p></p>
              Suitable only for 15 years and over. No one younger than 15 may
              see a 15 film in a cinema. No one younger than 15 may rent or buy
              a 15 rated video work. Please note: proof of age may be required.
              <p>
                Please visit British Board of Film Classification for more
                information.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header><p>
              18 - Suitable only for 18 years and over </p>
            </Accordion.Header>
            <Accordion.Body>
              <img src={eighteen} alt="eighteen"></img>
              <p></p>
              Suitable only for adults. No one younger than 18 may see an 18
              film in a cinema. No one younger than 18 may rent or buy an 18
              rated video work. Please note: proof of age may be required.
              <p>
                Please visit British Board of Film Classification for more
                information.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Classifications;
