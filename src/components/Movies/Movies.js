import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList';

import { initialMovies } from '../../utils/movies-init';
import './Movies.css';

const Movies = () => {
  const [moviesList, setMoviesList] = useState(initialMovies);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <React.Fragment>
      <Header/>
      <section className="Movies">
        <MoviesCardList
          moviesList={moviesList}
          isLoading={isLoading}
        />
      </section>
      <Footer/>
    </React.Fragment>
  );
}

export default Movies;
