import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import mainApi from '../../utils/MainApi';
import { SAVED_FILMS_API_BLOCK } from '../../utils/Const';

import './SavedMovies.css';

function SavedMovies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState('');

  useState(() => {
    setIsLoading(true);
    mainApi.getMovies()
      .then((data) => {
        setMoviesList(data);
      })
      .catch((err) => {
        setApiErrorMessage(SAVED_FILMS_API_BLOCK);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (movie) => {
    window.open(movie.trailer, '_blank');
  };

  const handleDeleteClick = (movie) => {
    mainApi.deleteMovie(movie._id)
    .then((deletedMovie) => {
      const newList = moviesList.filter(item => item.movieId !== deletedMovie.movieId);
      setMoviesList(newList);
    })
    .catch((error) => {
      console.log(`При удалении карточки произошла ошибка ${error}.`);
    });
  };

  return (
    <section className="saved-movies gradual-change">
      <SearchForm/>

      <MoviesCardList
        savedFilms={true}
        isLoading={isLoading}
        moviesList={moviesList}
        errorMessage={apiErrorMessage}
        onClick={handleCardClick}
        onDelete={handleDeleteClick}
      />

    </section>
  );
}

export default SavedMovies;