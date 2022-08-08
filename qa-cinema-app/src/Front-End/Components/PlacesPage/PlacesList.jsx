import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import PlacesListDetails from "../PlacesPage/PlacesListDetails";

const PlacesList = (props) => {
  return (
    <Card id="PlacesList-card">
      <CardImg src={props.poster} id="PlacesList-card-img" />
      <CardBody>
        <CardTitle id="PlacesList-name">
          <h4>{props.name}</h4>
        </CardTitle>
        <hr />
        <CardSubtitle className="PlacesList-subtitle">
          <p>Offers: {props.offers}</p>
          <p>Venue Type: {props.venueType}</p>
        </CardSubtitle>
        <hr />
        <div className="col-md-12">
            <PlacesList
             key={props.id}
             name={props.name}
             poster={props.poster}
             description={props.description}
             offers={props.offers}
             contactDetails={props.contactDetails}
             venueType={props.venueType}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default PlacesList;