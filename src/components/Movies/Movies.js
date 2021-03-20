import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import RoundCheckBox from '../RoundCheckBox/RoundCheckBox';
import Button from '../Button/Button';

import { readMovies, filterMovies } from '../../utils/MoviesSearch';
import { useWindowDimensions } from '../../hooks/useDimensions';
import { getVisualProps } from '../../utils/VisualProps';
import './Movies.css';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const [foundMovies, setFoundMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [findErrorMessage, setFindErrorMessage] = useState('');

  const { width } = useWindowDimensions();
  const [visualProps, setVisualProps] = useState({total: 12, add: 3});
  const [visibleCardsNumber, setVisibleCardsNumber] = useState(0);

  // При монтировании читаем данные из хранилища
  useEffect(() => {
    const found = localStorage.getItem('foundMovies');
    if (found) setFoundMovies(JSON.parse(found));
  }, []);

  // При изменении ширины меняем параметры отображения
  useEffect(() => {
    setVisualProps(getVisualProps(width));
  }, [width]);

  useEffect(() => {
    if (foundMovies.length <= visualProps.total) {
      setVisibleCardsNumber(foundMovies.length);
    } else {
      setVisibleCardsNumber(visualProps.total)
    }
  }, [foundMovies, visualProps.total]);

  useEffect(() => {
    if (foundMovies.length <= visibleCardsNumber) {
      setShowedMovies(foundMovies);
      setIsMoreVisible(false);
    } else {
      setShowedMovies(foundMovies.slice(0, visibleCardsNumber));
      setIsMoreVisible(true);
    }
  }, [visibleCardsNumber, foundMovies]);

  // -------------------------------------------------------------------------------
  // Поиск фильмов

  const searchMain = async (searchString, isShort) => {
    // Начальные значения
    setFoundMovies([]);
    setShowedMovies([]);
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

  const handleMoreClick = (event) => {
    setVisibleCardsNumber(visibleCardsNumber + visualProps.add);
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearchSubmit}/>

      <MoviesCardList
        moviesList={showedMovies}
        isLoading={isLoading}
        errorMessage={findErrorMessage}
      >
        <RoundCheckBox isChecked={false}/>
      </MoviesCardList>

      { isMoreVisible ?
        <Button userClass="movies__btn_action_more" onClick={handleMoreClick}>
          Ещё
        </Button> :
        <React.Fragment/>
      }
    </section>
  );
}

export default Movies;
