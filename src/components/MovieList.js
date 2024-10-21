import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!movies || movies.length === 0) {
    return <div>No movies available</div>; 
  }

  return (
    <div>
      <div className="">
        <h1>{title}</h1>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

