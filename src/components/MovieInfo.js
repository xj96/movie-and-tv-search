import React from "react";

const MovieInfo = ({ movie }) => {
  const postPath = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  return (
    <>
      <div className="card-flip">
        <div className="card-inner">
          <div className="card-front">
            <img className="card-img" src={postPath} alt={movie.title} />
          </div>
          <div className="card-back">
            <h1>{movie.title||movie.name}</h1>
            <h3>Release Date: {movie.release_date||movie.first_air_date}</h3>
            <p>Vote average: {movie.vote_average}/10.0</p>
            <div className="overview">{movie.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
