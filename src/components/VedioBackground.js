import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio);

  useMovieTrailer(movieId);

  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
       className="w-full aspect-video overflow-hidden"
        src={"https://www.youtube.com/embed/" + trailerVedio?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground; 