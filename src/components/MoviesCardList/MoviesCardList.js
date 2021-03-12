import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

const MoviesCardList = ({ isLoading, moviesList, children }) => {

  return (
    <ul className="MoviesCardList gradual-change">
      { isLoading
        ? <Preloader/>
        : moviesList.map((moviesCard) => (
            <MoviesCard key={moviesCard.id} movie={moviesCard}>
              {children}
            </MoviesCard>
          ))
      }
    </ul>
  );
};

export default MoviesCardList;