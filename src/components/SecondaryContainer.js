import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>


      {/* MovieList - popular
          (MovieCards * n)
                    - horror
                    - now pplaying
                    - trending
                    - etc
       */}
    </div>
  );
};

export default SecondaryContainer;
