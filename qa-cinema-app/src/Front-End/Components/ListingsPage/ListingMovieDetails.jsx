import React, { useState, Fragment } from "react";
import {
  CardLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const ListingMovieDetails = ({
  id,
  title,
  runtime,
  rating,
  poster,
  showtime,
  description,
  director,
  actors,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <CardLink className="btn btn-primary" onClick={toggle}>
        {" "}
        Movie Details
      </CardLink>
      <div className="modal-dialog modal-fullscreen-md-down">
        <Modal
          className="modal-container custom-modal-modal bg-dark text-white"
          id="listing-movie-details"
          dialogClassName="modal-dialog"
          isOpen={modal}
        >
          <ModalHeader id="movie-modal-header">{title}</ModalHeader>
          <ModalBody id="movie-modal-body">
            <div className="row-md">
              <div className="col-md-12" id="modal-image">
                <img src={poster} alt={title} width="30%" height="30%" />
              </div>

              <div className="col-md-12">
                <hr />
                <h6 id="movie-director">{description}</h6>
                <hr></hr>
                <p id="movie-director">Directed By {director}</p>
                <h5 id="movie-director">Starring: </h5>
                <br></br>
                {actors.map((actor) => (
                  <p className="text-dark" id="movie-actor">
                    {actor}
                  </p>
                ))}
                <br />
                <hr></hr>
                <p className="text-dark" id="movie-runtime">
                  Runtime: {runtime}
                </p>
                <hr></hr>
                <p className="text-dark" id="movie-rating">
                  Show Time: {showtime}
                </p>
                <hr></hr>
                <p className="text-dark" id="movie-rating">
                  Rating: {rating}
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter id="movie-modal-footer">
            <button onClick={toggle} className="btn btn-info">
              Go Back
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ListingMovieDetails;
