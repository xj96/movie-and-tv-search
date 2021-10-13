import React, { useState } from "react";
import MovieInfo from "./MovieInfo";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const api_key = "505c2842bdf5f1cfb5636f18aedf8045";

  const url =
    "https://api.themoviedb.org/3/search/multi?api_key=" +
    api_key +
    "&query=" +
    query;

  const getMovies = async (e) => {
    try {
      e.preventDefault();

      const result = await fetch(url);

      const data = await result.json();

      setMovies(data.results);

      console.log(query, data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
      <>
    <div id="content" className="section" onSubmit={getMovies}>
      <form className="form-control">
        <label className="form-label">Movie & TV Name</label>
        <input
          className="form-input"
          type="text"
          name="query"
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>

      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieInfo movie={movie} key={movie.id} />
          ))}
      </div>
      
    </div>
    </>
  );
};

export default SearchMovie;
