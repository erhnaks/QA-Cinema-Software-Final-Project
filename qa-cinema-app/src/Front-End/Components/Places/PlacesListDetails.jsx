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
    venueType,
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
          <ModalHeader id="movie-modal-header">{name}</ModalHeader>
          <ModalBody id="movie-modal-body">
            <div class="row-md">
              <div className="col-md-12" id="modal-image">
                <img src={poster} alt={name} width="30%" height="30%" />
              </div>

              <div className="col-md-12">
                <hr />
                {/* <h5>Description</h5> */}
                <h6>{description}</h6>
                <hr></hr>
                <p id="movie-director">Contact Details {contactDetails}</p>
                {/* <h5>Venue Type: </h5> */}
                <br></br>
                {/* {contactDetails.map((contactDetail) => (
                  <p id="movie-actor">{contactDetail}</p> */}
                {/* ))} */}
                <br />
                <hr></hr>
                {/* <p id="places-venueType">Venue Type: {name}</p> */}
                <p id="places-offers">Offers: {offers}</p>
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


  export default PlacesListDetails;