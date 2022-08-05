import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

const NewReleasesMovies = (props) => {
  return (
    <Card id="ListingMovie-card">
      <CardImg src={props.poster} id="ListingMovie-card-img" />
      <CardBody>
        <CardTitle id="ListingMovie-title">
          <h4>{props.title}</h4>
        </CardTitle>
        <hr />
        <CardSubtitle className="ListingMovie-subtitle">
          <p>Runtime: {props.runtime}</p>
          <p>Rating: {props.rating}</p>
        </CardSubtitle>
        <hr />
        <div className="col-md-12">
          <ListingDetails
            id={props.id}
            title={props.title}
            runtime={props.runtime}
            rating={props.rating}
            poster={props.poster}
            showtime={props.showtime}
            description={props.description}
            director={props.director}
            actors={props.actors}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default NewReleasesMovies;
