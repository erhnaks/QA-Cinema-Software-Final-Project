import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import PlacesListDetails from "./PlacesListDetails";

const PlacesList = (props) => {
  return (
    <Card id="ListingMovie-card">
      <CardImg src={props.poster} id="ListingMovie-card-img" />
      <CardBody>
        <CardTitle id="ListingMovie-title">
          <h4>{props.name}</h4>
        </CardTitle>
        <hr />
        <CardSubtitle className="ListingMovie-subtitle">
          <p>Offers: {props.offers}</p>
          {/* <p>Venue Type: {props.venueType}</p> */}
        </CardSubtitle>
        <hr />
        <div className="col-md-12">
            <PlacesListDetails
             id={props.id}
             name={props.name}
             poster={props.poster}
             description={props.description}
             offers={props.offers}
             contactDetails={props.contactDetails}
            //  venueType={props.venueType}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default PlacesList;