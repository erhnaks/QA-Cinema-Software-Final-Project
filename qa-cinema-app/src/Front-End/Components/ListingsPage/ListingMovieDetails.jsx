import React, { useState } from "react";
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
  director,
  poster,
  actors,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <CardLink className="btn btn-primary" onclick={toggle}>
        {" "}
        Movie Details
      </CardLink>
      <div className="modal-dialog modal-fullscreen-md-down">
        <Modal
          className="modal-container custom-modal-modal"
          id="listing-movie-details"
          dialogClassName="modal-dialog"
          isOpen={modal}
        >
          <ModalHeader id="modal-header">{title}</ModalHeader>
          <ModalBody id="modal-body">
            <div class="row-md">
              <div className="col-md-12" id="modal-image">
                <img src={poster} alt={title} width="30%" height="30%" />
              </div>

              <div className="col-md-12">
                <hr />
                <p id="director">Directed by {director}</p>
                <h6>The main cast: </h6>
                {actors.map((actor) => (
                  <p id="cast">{actor}</p>
                ))}
                <br />
                <p id="runtime">Runtime: {runtime}</p>
                <p id="card-rating">Rating: {rating}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter id="modalfooter">
            <button onClick={toggle} className="btn btn-outline-danger">
              Go Back
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
