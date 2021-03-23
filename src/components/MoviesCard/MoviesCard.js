import React from 'react';
import { getVisualProps } from '../../utils/VisualProps';
import './MoviesCard.css';

function MoviesCard({ movie, children, onClick }) {

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60;
    return `${hours}ч${minutes}м`;
  };

  const handleClick = () => {
    onClick(movie);
  };

  return (
    <li className="card gradual-change">
      <div className="card__wrapper">
        <img
          className="card__image"
          src={movie.image}
          alt={movie.nameRU}
          onClick={handleClick}
        />
      </div>

      <ul className="card__info">
        <li className="card__name">{movie.nameRU}</li>
        <li>{children}</li>
        <li className="card__duration">{getMovieDuration(movie.duration)}</li>
      </ul>
    </li>
  );
}

export default MoviesCard;