import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import Button from '../Button/Button';

import { readMovies, filterMovies } from '../../utils/MoviesSearch';
import './Movies.css';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [findErrorMessage, setFindErrorMessage] = useState(<span/>);

  useEffect(() => {
    // При монтировании читаем данные из хранилища
    const found = localStorage.getItem('foundMovies');
    if (found) { setFoundMovies(JSON.parse(found)); }
  }, []);

  // -------------------------------------------------------------------------------
  // Поиск фильмов

  const searchMain = async (searchString, isShort) => {
    // Начальные значения
    setFoundMovies([]);
    setFindErrorMessage('');
    if (localStorage.getItem('foundMovies')) localStorage.removeItem('foundMovies');

    let movies, found;
    try {
      setIsLoading(true);

      // Читаем фильмы с сервиса beatfilm-movies
      movies = await readMovies();

      // Выполняем поиск
      found = await filterMovies(searchString.toLowerCase(), isShort, movies);

      setFoundMovies(found);
      localStorage.setItem('foundMovies', JSON.stringify(found));

    } catch (err) {
      setFindErrorMessage(err);
    } finally {
      setIsLoading(false);
    };
  };

  // Параметры (searchString, isShort) получаем из компонента SearchForm
  const handleSearchSubmit = (event, searchString, isShort) => {
    searchMain(searchString, isShort);
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearchSubmit}/>

      <MoviesCardList
        moviesList={foundMovies}
        isLoading={isLoading}
        errorMessage={findErrorMessage}
      >
        <RoundCheckBox isChecked={false}/>
      </MoviesCardList>

      <Button userClass="movies__btn_action_more">Ещё</Button>
    </section>
  );
}

export default Movies;
