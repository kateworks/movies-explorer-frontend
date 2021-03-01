import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';

import { initialMovies } from '../../utils/movies-init';
import './Movies.css';

function Movies() {
  const [moviesList, setMoviesList] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <Header />

      <section className="movies">
        <SearchForm/>

        <MoviesCardList
          moviesList={moviesList}
          isLoading={isLoading}
        />

        <Button userClass="movies__btn_action_more">Ещё</Button>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Movies;
