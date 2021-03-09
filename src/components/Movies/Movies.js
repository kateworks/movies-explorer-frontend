import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import Button from '../Button/Button';

import { initialMovies } from '../../utils/movies-init';
import './Movies.css';

function Movies() {
  const [moviesList, setMoviesList] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="movies">
      <SearchForm/>

      <MoviesCardList moviesList={moviesList} isLoading={isLoading}>
        <RoundCheckBox isChecked={false} />
      </MoviesCardList>

      <Button userClass="movies__btn_action_more">Ещё</Button>
    </section>
  );
}

export default Movies;
