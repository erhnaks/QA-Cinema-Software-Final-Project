import React, { useState, Fragment } from "react";
import {
    CardLink,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
  } from "reactstrap";

  const PlacesListDetails = ({
    name,
    poster,
    description,
    offers,
    contactDetails,
    venueType,
  }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return
    <Fragment>
         <CardLink className="btn btn-primary" onClick={toggle}>
        {" "}
        Description
      </CardLink>
      <div className="modal-dialog modal-fullscreen-md-down">
        <Modal
          className="modal-container custom-modal-modal"
          id="places-list-details"
          dialogClassName="modal-dialog"
          isOpen={modal}
        >
          <ModalHeader id="places-modal-header">{title}</ModalHeader>
          <ModalBody id="places-modal-body">
            <div class="row-md">
              <div className="col-md-12" id="modal-image">
                <img src={poster} alt={title} width="30%" height="30%" />
              </div>

              <div className="col-md-12">
                <hr />
                {/* <h5>Description</h5> */}
                <h6>{description}</h6>
                <hr></hr>
                <p id="places-offers">Current Local Offers {offers}</p>
                <h5>Venue Type: </h5>
                <br></br>
                {venueType.map((venueType) => (
                  <p id="places-venueType">{venueType}</p>
                ))}
                <br />
                <hr></hr>
                <p id="places-venueType">Venue Type: {venueType}</p>
                <p id="places-offers">Offers: {offers}</p>
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

  };
};

  export default PlacesListDetails;