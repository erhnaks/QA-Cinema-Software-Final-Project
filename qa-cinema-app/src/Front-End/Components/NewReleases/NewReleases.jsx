


const NewReleases = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <div className="row-md" id="NewMovieRelease-Header">
          <hr id="hr" />
          <h1>New Releases are coming this Bank Holiday </h1>
          <hr id="hr" />
          <p>
            Welcome to the QA Cinema! Here you can find all of movies that are
            coming soon!!! Book your Tickets Now!
          </p>
        </div>
        <div className="row">
          {data.map((movie) => (
            <div className="col-md-4">
              <br />
              <NewReleases
                key={movie.id}
                title={movie.title}
                runtime={movie.runtime}
                rating={movie.rating}
                poster={movie.img}
                showtime={movie.showtime}
                description={movie.description}
                director={movie.director}
                actors={movie.actors}
              />
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default NewReleases;
