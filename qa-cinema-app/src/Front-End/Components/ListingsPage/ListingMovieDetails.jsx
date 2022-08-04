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
  const toggle= () => setModal(!modal);

return (
<React.Fragment>

<CardLink className="btn btn-primary" onclick={toggle}> Movie Details</CardLink>
<div className="modal-dialog modal-fullscreen-md-down">
  <Modal className="modal-container custom-modal-modal">
  id="listing-movie-details" dialogClassName="modal-dialog" isOpen={modal}>
    <ModalHeader id="modal-header">{title}</ModalHeader>






    </Modal>
</div>





</React.Fragment>



)


};
