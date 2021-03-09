import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ movie, children }) => (
  <li className="card gradual-change">
      <img
        className="card__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />

      <ul className="card__info">
        <li className="card__name">{movie.nameRU}</li>
        <li>{children}</li>
        <li className="card__duration">{movie.duration}</li>
      </ul>
  </li>
);

export default MoviesCard;