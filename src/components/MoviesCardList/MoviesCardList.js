import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';

import './MoviesCardList.css';

const MoviesCardList = ({ isLoading, moviesList }) => {

  return (
    <ul className="MoviesCardList gradual-change">
      { isLoading
        ? <Preloader/>
        : moviesList.map((moviesCard) => (
            <MoviesCard key={moviesCard.movieId} movie={moviesCard}>
              <RoundCheckBox isChecked={moviesCard.saved} />
            </MoviesCard>
          ))
      }
    </ul>
  );
};

export default MoviesCardList;