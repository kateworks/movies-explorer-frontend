import React from 'react';
import ShortFilmSign from '../ShortFilmSign/ShortFilmSign';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => (
  <li className="card gradual-change">
      <img
        className="card__image"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />

      <ul className="card__info">
        <li className="card__name">{movie.nameRU}</li>
        <ShortFilmSign isShort={movie.short}/>
        <li className="card__duration">{movie.duration}</li>
      </ul>
  </li>
);

export default MoviesCard;