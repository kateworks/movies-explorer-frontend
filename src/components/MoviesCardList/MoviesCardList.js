import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList(props) {

  const getMoviesList = (moviesList) => {
    if (moviesList.length > 0) {
      return moviesList.map((moviesCard) => (
        <MoviesCard key={moviesCard.movieId} movie={moviesCard}>
          {props.children}
        </MoviesCard>
      ));
    }
    return (
      <p className="list__no-result">
        {props.errorMessage}
      </p>
    );
  };

  return (
    <ul className="list gradual-change">
      {props.isLoading ? <Preloader /> : getMoviesList(props.moviesList) }
    </ul>
  );
}

export default MoviesCardList;