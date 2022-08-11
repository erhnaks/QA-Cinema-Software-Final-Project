import React, { useState, Fragment } from "react";
import {
  CardLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const PlacesListDetails = ({
  id,
  poster,
  name,
  description,
  offers,
  contactDetails,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Fragment>
      <CardLink className="btn btn-primary" onClick={toggle}>
        {" "}
        Description
      </CardLink>
      <div className="modal-dialog modal-fullscreen-md-down">
        <Modal
          className="modal-container custom-modal-modal"
          id="listing-movie-details"
          dialogClassName="modal-dialog"
          isOpen={modal}
        >
          <ModalHeader id="places-modal-header">{name}</ModalHeader>
          <ModalBody id="places-modal-body">
            <div className="row-md">
              <div className="col-md-12" id="modal-image">
                <img src={poster} alt={name} width="30%" height="30%" />
              </div>

              <div className="col-md-12">
                <hr />
                <h6 id="movie-director">{description}</h6>
                <hr></hr>
                <p id="movie-director">Contact Details {contactDetails}</p>
                <br></br>
                <hr></hr>
                <p id="movie-director">Offers: {offers}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter id="places-modal-footer">
            <button onClick={toggle} className="btn btn-info">
              Go Back
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </Fragment>
  );
};

export default PlacesListDetails;
