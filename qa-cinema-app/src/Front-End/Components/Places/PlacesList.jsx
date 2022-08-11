import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import PlacesListDetails from "./PlacesListDetails";

const PlacesList = (props) => {
  return (
    <Card id="PlacesList-card" key={props.id}>
      <CardImg src={props.poster} id="PlacesList-card-img" />
      <CardBody>
        <CardTitle id="PlacesList-title">
          <h4>{props.name}</h4>
        </CardTitle>
        <hr />
        <CardSubtitle className="ListingMovie-subtitle">
          <p>Offers: {props.offers}</p>
          {/* <p>Venue Type: {props.venueType}</p> */}
        </CardSubtitle>
        <hr />
        <div className="col-md-12" key={props.id}>
            <PlacesListDetails
            id={props.id}
            name={props.name}
            poster={props.poster}
            description={props.description}
            offers={props.offers}
            contactDetails={props.contactDetails}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default PlacesList;