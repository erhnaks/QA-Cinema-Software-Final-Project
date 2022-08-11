//import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./about.css";

const AboutPage = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>

      <div className="container">
        <h1>About Us</h1>

        <div>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>
                Take a seat in the clouds at QA Cinema Club, Join us now for an
                experience you will never forget...
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Team <cite title="Source Title">Foxtrot</cite>
            </figcaption>
          </figure>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="card col-6 p-3 drop-shadow bg-dark text-white">
            {/* General Information about US */}
            <h3>Who We Are</h3>
            Founded in 1984, QA Cinemas are one of the best known cinema chains
            in the UK and Ireland. The world Famous QA London International
            House Centre, Nearby the Tower of London and right overlooking the
            St Kathrine Docks. Owned By QA Ltd, Who are deep rooted in quality
            service for their clients. At our cinemas we're determined to show
            every guest a great experience, each and every time they visit. Our
            IMAX screens and Dolby surround sound systems are the height of
            immersive viewing. Grab a popcorn and a soft drink, cozy up in our
            recliners and couches. Going to the cinema should always be an
            experience!
          </div>

          <div className="card col-4 p-3 bg-dark text-white drop-shadow" id="qa-location">
            {/* Location */}
            <h3>Where to Find Us</h3>
            International House, 1 St Katharine's Way, London E1W 1UN
            <div className="mt-2">
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=e1w1UN&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div id="reviews">
          {/* Reviews */}
          <div className="container mt-3 mb-4">
            <div className="row">
              <h2>Reviews</h2>
              <hr />
              <div className="col-md-4">
                <div className="card p-3 bg-dark text-white">
                  <p>
                    Wowww! What a beautiful cinema, Loved the location and the
                    ease of access. The staff were very friendly and I can't
                    wait to go back.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about">
                      {" "}
                      <span className="font-weight-bold d-block">
                        Alex Smith
                      </span>{" "}
                      <span className="u-color">Teacher</span>
                      <h3 className="star-rating">★★★★★</h3>
                    </div>
                    <div className="user-image">
                      {" "}
                      <img
                        src="https://i.imgur.com/UUW3zLx.jpg"
                        className="rounded-circle"
                        width="70"
                        alt="user"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 bg-dark text-white">
                  <p>
                    Now this is what im talking about, good cinema, good food,
                    and an amazing team. I truly felt at home sitting in those
                    luxurious seats, can not wait to be back!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about">
                      {" "}
                      <span className="font-weight-bold d-block">
                        Sophia T.
                      </span>{" "}
                      <span className="u-color">Mum</span>
                      <h3 className="star-rating">★★★★★</h3>
                    </div>
                    <div className="user-image">
                      {" "}
                      <img
                        src="https://i.imgur.com/o5uMfKo.jpg"
                        className="rounded-circle"
                        width="70"
                        alt="user"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-3 bg-dark text-white">
                  <p>
                    The vibe was amazing! Queues were a bit long but
                    understandable! This is THE go to cinema in London{" "}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="user-about">
                      {" "}
                      <span className="font-weight-bold d-block">
                        Michael Scott
                      </span>{" "}
                      <span className="u-color">Regional Manager</span>
                      <h3 className="star-rating">★★★★☆</h3>
                    </div>
                    <div className="user-image">
                      {" "}
                      <img
                        src="https://cdn.justjared.com/wp-content/uploads/headlines/2020/06/steve-carell-bob-odenkirk.jpg"
                        className="rounded-circle"
                        width="70"
                        alt="user"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutPage;
