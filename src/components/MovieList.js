import React from "react";
import MovieCard from "../components/MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-sm md:text-3xl py-4 text-white font-bold">{title}</h1>
      {movies?.length > 0 ? (
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white">No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
