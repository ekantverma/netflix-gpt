import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ movies }) => {
  if (!movies || !movies.poster_path) {
    return <div>No Image</div>;
  }
  

  return (
    <div>
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + movies[0].poster_path}
      />
    </div>
  );
};

export default MovieCard;
