import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import Button from '../Button/Button';

//import { initialMovies } from '../../utils/movies-init';
import moviesApi from '../../utils/MoviesApi';
import { MOVIES_URL } from '../../utils/MoviesApi';
import './Movies.css';

function Movies() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  const readMovies = () => {
    setIsLoading(true);
    moviesApi.getAllMovies()
      .then((movies) => {
        //console.log(movies);
        setMoviesList(movies.map(movie => {
          return {
            movieId: movie.id,
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image ? `${MOVIES_URL}${movie.image.url}` : '',
            trailer: movie.trailerLink,
            thumbnail: movie.image ? `${MOVIES_URL}${movie.image.formats.thumbnail.url}` : '',
            owner: 0,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
        }));
      })
      .catch((err) => {
        console.log(`Ошибка загрузки данных: ${err}.`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const searchMovies = (string, moviesList) => {
    const checkField = (field, string) => (field ? field.toLowerCase().includes(string) : false);

    return moviesList.filter((movie) => {
      const c1 = checkField(movie.nameRU, string);
      const c2 = checkField(movie.nameEN, string);
      const c3 = checkField(movie.director, string);
      const c4 = checkField(movie.country, string);
      const c5 = checkField(movie.year, string);
      return (c1 || c2 || c3 || c4 || c5);
    });
  };

  const handleSearchSubmit = (event, searchString, isShort) => {
    event.preventDefault();
    readMovies();
    const found = searchMovies(searchString.toLowerCase(), moviesList);
    console.log(found);
    setFoundMovies(found);
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearchSubmit}/>

      <MoviesCardList moviesList={foundMovies} isLoading={isLoading}>
        <RoundCheckBox isChecked={false}/>
      </MoviesCardList>

      <Button userClass="movies__btn_action_more">Ещё</Button>
    </section>
  );
}

export default Movies;
