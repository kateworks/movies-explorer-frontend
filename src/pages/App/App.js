import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/Auth';
import ProtectedRoute from '../../components/ProtectedRoute';

import HomePage from '../HomePage';
import Login from '../Login/Login';
import Register from '../Register';
import ProfilePage from '../ProfilePage';
import MoviesPage from '../MoviesPage';
import SavedMoviesPage from '../SavedMoviesPage';
import NotFound from '../NotFound/NotFound';

import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [resultMessage, setResultMessage] = useState('');

  let history = useHistory();

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser({ name: res.name, email: res.email });
            setLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch(err => {
          console.log('Переданный токен некорректен.');
          setLoggedIn(false);
          localStorage.removeItem('foundMovies');
          localStorage.removeItem('jwt');
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // ---------------------------------------------------------------------
  // Авторизация

  const handleLogin = (userEmail, userPassword, resetLoginForm) => {
    let messageText = '';

    auth.authorize(userEmail, userPassword)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          resetLoginForm();
          history.push('/movies');
          setLoggedIn(true);
        }
      })
      .catch(err => {
        switch (err) {
          case 400:
            messageText = "Некорректное значение одного или нескольких полей";
            break;
          case 401:
            messageText = `Неверно указаны e-mail или пароль`;
            break;
          default:
            messageText = "Что-то пошло не так! Попробуйте ещё раз.";
        }
      })
      .finally(() => {
        setResultMessage(messageText);
      });
  };

  // ---------------------------------------------------------------------
  // Выход

  const handleLogout = () => {
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    history.push('/');
  };

  // ---------------------------------------------------------------------
  // Регистрация

  const handleRegister = (userEmail, userPassword, userName, resetRegisterForm) => {
    let messageText = '';
    auth.register(userEmail, userPassword, userName)
      .then((res) => {
        resetRegisterForm();
        // history.push('/signin');
        //------------------------------------------------------
        auth.authorize(userEmail, userPassword)
          .then((data) => {
            if (data.token) {
              localStorage.setItem('jwt', data.token);
              history.push('/movies');
              setLoggedIn(true);
            }
          })
          .catch((err) => {
            console.log('Переданный токен некорректен.');
            setLoggedIn(false);
          });
        //------------------------------------------------------
      })
      .catch((err) => {
        switch (err) {
          case 400:
            messageText = "Некорректное значение одного или нескольких полей";
            break;
          case 409:
            messageText = `Пользователь ${userEmail} уже существует`;
            break;
          default:
            messageText = "Что-то пошло не так! Попробуйте ещё раз.";
        }
      })
      .finally(() => {
        setResultMessage(messageText);
      });
  };

  const resetResultMessage = () => {
    setResultMessage('');
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <ProtectedRoute path="/movies"
            loggedIn={loggedIn}
            component={MoviesPage}
          />

          <ProtectedRoute path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMoviesPage}
          />

          <ProtectedRoute path="/profile"
            loggedIn={loggedIn}
            component={ProfilePage}
            onLogout={handleLogout}
          />

          <Route path="/signin">
            <Login onLogin={handleLogin}
              errorMessage={resultMessage}
              resetMessage={resetResultMessage}
              history={history}
            />
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister}
              errorMessage={resultMessage}
              resetMessage={resetResultMessage}
              history={history}
            />
          </Route>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path="*">
            <NotFound history={history}/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
