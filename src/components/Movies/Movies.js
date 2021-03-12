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

  const readMovies = () => {
    setIsLoading(true);
    moviesApi.getAllMovies()
      .then((movies) => {
        console.log(movies);
        setMoviesList(movies.map(movie => {
          return {
            nameRU: movie.nameRU,
            thumbnail: movie.image ? `${MOVIES_URL}${movie.image.url}` : '',
            trailerLink: movie.trailerLink,
            duration: movie.duration,
            id: movie.id,
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

  useEffect(() => {
    readMovies();
  }, []);

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
