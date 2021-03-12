import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, children }) {

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60;
    return `${hours}ч${minutes}м`;
  };

  return (
    <li className="card gradual-change">
      <div className="card__wrapper">
        <img
          className="card__image"
          src={movie.image}
          alt={movie.nameRU} />
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