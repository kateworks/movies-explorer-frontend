import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Button from '../Button/Button';

import { readMovies, filterMovies, addSavedFlag } from '../../utils/MoviesSearch';
import { useWindowDimensions } from '../../hooks/useDimensions';
import { getVisualProps } from '../../utils/VisualProps';
import './Movies.css';
import mainApi from '../../utils/MainApi';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMoreVisible, setIsMoreVisible] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [showedMovies, setShowedMovies] = useState([]);
  const [findErrorMessage, setFindErrorMessage] = useState('');

  const { width } = useWindowDimensions();
  const [visualProps, setVisualProps] = useState({total: 12, add: 3});
  const [visibleCardsNumber, setVisibleCardsNumber] = useState(0);

  useEffect(() => {
    // При монтировании читаем данные из хранилища
    const found = localStorage.getItem('foundMovies');
    if (found) setFoundMovies(JSON.parse(found));
    // ... а также сохраненные фильмы
    mainApi.getMovies()
    .then((data) => {
      setSavedMovies(data);
    })
    .catch((err) => {
      console.log(`Нет доступа к сохраненным фильмам: ${err}`);
    });
  }, []);

  // При изменении ширины меняем параметры отображения
  useEffect(() => {
    setVisualProps(getVisualProps(width));
  }, [width]);

  useEffect(() => {
    if (foundMovies.length <= visualProps.total) {
      setVisibleCardsNumber(foundMovies.length);
      setIsMoreVisible(false);
    } else {
      setVisibleCardsNumber(visualProps.total)
      setIsMoreVisible(true);
    }
  }, [foundMovies, visualProps]);

  useEffect(() => {
    setShowedMovies(foundMovies.slice(0, visibleCardsNumber));
  }, [visibleCardsNumber, foundMovies]);

  useEffect(() => {

  }, [savedMovies]);

  // -------------------------------------------------------------------------------
  // Поиск фильмов

  const searchMain = async (searchString, isShort) => {
    // Начальные значения
    setFoundMovies([]);
    setShowedMovies([]);
    setFindErrorMessage('');
    if (localStorage.getItem('foundMovies')) localStorage.removeItem('foundMovies');

    try {
      setIsLoading(true);

      // Читаем фильмы с сервиса beatfilm-movies
      const movies = await readMovies();

      // Выполняем поиск
      const found = await filterMovies(searchString.toLowerCase(), isShort, movies);

      // Добавить признак того, сохранена ли карточка
      const foundChecked = addSavedFlag(found, savedMovies.slice());
      setFoundMovies(foundChecked);

      localStorage.setItem('foundMovies', JSON.stringify(foundChecked));

    } catch (err) {
      setFindErrorMessage(err);
    } finally {
      setIsLoading(false);
    };
  };

  // Параметры (searchString, isShort) получаем из компонента SearchForm
  const handleSearchSubmit = (searchString, isShort) => {
    searchMain(searchString, isShort);
  };

  const handleMoreClick = () => {
    // Определяем количество отображаемых карточек
    let newValue = visibleCardsNumber + visualProps.add;
    let length = foundMovies.length;

    if (newValue >= length) {
      newValue = length;
      setIsMoreVisible(false);
    }
    setVisibleCardsNumber(newValue);
  };

  const handleSaveClick = async (movieId) => {
    try {
      // Находим сохраняемый/удаляемый фильм
      const films = foundMovies.filter(currentMovie => currentMovie.movieId === movieId);
      if (films.length !== 1) throw new Error("Ошибка при сохранении/удалении фильма");

      let newFoundMovies = [];

      if (films[0].saved === 0) {
        delete films[0].saved;
        const result = await mainApi.postNewMovie(films[0]);

        const {
          movieId, country, director, duration, year,
          description, image, trailer, nameRU, nameEN,
          thumbnail, _id,
        } = result;

        const newFilm = {
          movieId, country, director, duration, year,
          description, image, trailer, nameRU, nameEN,
          thumbnail, saved: _id,
        };

        // Дополняем массивы foundMovies & savedMovies
        newFoundMovies = foundMovies.map((item) => (
          item.movieId === movieId ? newFilm : item
        ));

        setFoundMovies(newFoundMovies);

        const newSavedMovies = savedMovies.slice();
        newSavedMovies.push(result);
        setSavedMovies(newSavedMovies);

      } else {
        const result = await mainApi.deleteMovie(films[0].saved);

        const {
          movieId, country, director, duration, year,
          description, image, trailer, nameRU, nameEN,
          thumbnail,
        } = result;

        const newFilm = {
          movieId, country, director, duration, year,
          description, image, trailer, nameRU, nameEN,
          thumbnail, saved: 0,
        };

        // Дополняем массивы foundMovies & savedMovies
        newFoundMovies = foundMovies.map((item) => (
          item.movieId === movieId ? newFilm : item
        ));

        setFoundMovies(newFoundMovies);

        const newSavedMovies = savedMovies.filter((item) => (
          item.movieId !== movieId
        ));
        setSavedMovies(newSavedMovies);
      }

      if (localStorage.getItem('foundMovies')) localStorage.removeItem('foundMovies');
      localStorage.setItem('foundMovies', JSON.stringify(newFoundMovies));

    } catch(err) {
      console.log(err);
    }
  };

  const handleCardClick = (movie) => {
    console.log(movie);
  };

  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearchSubmit}/>

      <MoviesCardList
        moviesList={showedMovies}
        isLoading={isLoading}
        errorMessage={findErrorMessage}
        onSave={handleSaveClick}
        savedFilms={false}
        onClick={handleCardClick}
      />

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
