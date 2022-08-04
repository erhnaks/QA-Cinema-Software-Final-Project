import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

const ListingMovie = (props) => {
  return (
    <Card id="ListingMovie-card">
      <CardImg src={props.poster} id="ListingMovie-card" />
      <CardBody>
        <CardTitle id="ListingMovie-title">
          <h4>{props.title}</h4>
        </CardTitle>
        <hr />
        <CardSubtitle id="ListingMovie-subtitle">
          <p>Runtime: {props.runtime}</p>
          <p>Rating: {props.rating}</p>
        </CardSubtitle>
        <hr />
        <div className="col-md-12">
          title={props.title}
          runtime={props.runtime}
          rating={props.rating}
          poster={props.poster}
          director={props.director}
          actors={props.actors}
        </div>
      </CardBody>
    </Card>
  );
};

export default ListingMovie;
