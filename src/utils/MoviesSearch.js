//--------------------------------------------------------------------------------------
// Модуль MoviesSearch.js
// Поиск фильмов
//--------------------------------------------------------------------------------------

import moviesApi, { MOVIES_URL } from './MoviesApi';
import mainApi from './MainApi';

//--------------------------------------------------------------------------------------
// Чтение данных с сервиса beatfilm-movies

export const readMovies = async () => {
  try {
    // Ждем'с...
    const movies = await moviesApi.getAllMovies();

    // Формируем полный список фильмов
    const moviesList = movies.map(movie => {
      return {
        movieId: movie.id,
        country: movie.country || '-',
        director: movie.director || '-',
        duration: movie.duration || 0,
        year: movie.year || '2021',
        description: movie.description || '-',
        image: movie.image ? `${MOVIES_URL}${movie.image.url}` : 'https://fakeimg.pl/300/',
        trailer: movie.trailerLink || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        nameRU: movie.nameRU || '',
        nameEN: movie.nameEN || '',
        thumbnail: movie.image ? `${MOVIES_URL}${movie.image.formats.thumbnail.url}` : 'https://fakeimg.pl/300/',
      };
    });

    return Promise.resolve(moviesList);

  } catch(err) {

    const errMsg = [
      `Во время запроса произошла ошибка.`,
      `Возможно, проблема с соединением или сервер недоступен.`,
      `Подождите немного и попробуйте ещё раз`,
    ];

    const errString = errMsg.map((item, index) => {
      return <p key={index} className="list__no-result">{item}</p>;
    });

    return Promise.reject(errString);
  };
};

const checkField = (field, searchString) => {
  return field ? field.toLowerCase().includes(searchString) : false;
}

//--------------------------------------------------------------------------------------
// Выполняем поиск в массиве фильмов

export const filterMovies = async (searchString, short, moviesList) => {
  const maxDuration = short ? 40 : 100000;
  const string = searchString.toLowerCase();

  const foundMovies = moviesList.filter((movie) => {
    const c1 = checkField(movie.nameRU, string);
    const c2 = checkField(movie.nameEN, string);
    const c3 = checkField(movie.director, string);
    const c4 = checkField(movie.country, string);
    const c5 = checkField(movie.year, string);
    const c6 = movie.duration ? movie.duration <= maxDuration : false;
    return ((c1 || c2 || c3 || c4 || c5) && c6);
  });

  if (foundMovies.length > 0) return Promise.resolve(foundMovies);

  const errString = <p className="list__no-result">Ничего не найдено</p>;
  return Promise.reject(errString);
};

export const addSavedFlag = (films, savedFilms) => {
  // Просматриваем массив найденных фильмов
  return films.map((film) => {
    const {
      movieId, country, director, duration,
      year, description, image, trailer,
      nameRU, nameEN, thumbnail,
    } = film;

    // Проверяем, есть ли данный фильм в списке сохраненных
    const saved = savedFilms.filter(savedFilm => savedFilm.movieId === movieId);

    // Устанавливаем флаг saved в зависимости от результатов поиска
    let savedId = 0;
    if (saved.length === 1) savedId = saved[0]._id;

    const newFilm = {
      movieId, country, director, duration,
      year, description, image, trailer,
      nameRU, nameEN, thumbnail, saved: savedId,
    };

    return newFilm;
  });
};


