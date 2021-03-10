import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/Auth';

import HomePage from '../HomePage';
import Login from '../Login/Login';
import Register from '../Register';
import ProfilePage from '../ProfilePage';
import MoviesPage from '../MoviesPage';
import SavedMoviesPage from '../SavedMoviesPage';
import NotFound from '../NotFound/NotFound';
import InfoToolTip from '../../components/InfoToolTip/InfoToolTip';

import './App.css';
import iconSuccess from '../../images/reg-success.svg';
import iconFailure from '../../images/reg-failure.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState({ image: null, text: '' });

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
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------------------------------------------------------------------
  // Авторизация

  const handleLogin = (userEmail, userPassword, resetLoginForm) => {

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
        let messageText = '', imageLink = iconFailure;
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
        setResultMessage({ image: imageLink, text: messageText });
        setIsPopupOpen(true);
      });
  };

  // ---------------------------------------------------------------------
  // Выход

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  };

  // ---------------------------------------------------------------------
  // Регистрация

  const handleRegister = (userEmail, userPassword, userName, resetRegisterForm) => {
    let messageText = '', imageLink = null;
    auth.register(userEmail, userPassword, userName)
      .then((res) => {
        resetRegisterForm();
        history.push('/signin');
        messageText ="Вы успешно зарегистрировались!";
        imageLink = iconSuccess;
      })
      .catch((err) => {
        imageLink = iconFailure;
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
        setResultMessage({ image: imageLink, text: messageText });
        setIsPopupOpen(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`App ${isPopupOpen ? 'no-scroll' : ''}`}>
        <Switch>
          <Route path="/signin">
            <Login onLogin={handleLogin} history={history}/>
          </Route>

          <Route path="/signup">
            <Register onRegister={handleRegister} history={history} />
          </Route>

          <Route path="/movies">
            <MoviesPage/>
          </Route>

          <Route path="/saved-movies">
            <SavedMoviesPage/>
          </Route>

          <Route path="/profile">
            <ProfilePage/>
          </Route>

          <Route exact path="/">
            <HomePage/>
          </Route>

          <Route path="*">
            <NotFound history={history}/>
          </Route>
        </Switch>
      </div>

      {/* Вывод сообщения о результатах регистрации/авторизации */}
      { isPopupOpen &&
        <InfoToolTip
          onClose={() => setIsPopupOpen(false)}
          imageLink={resultMessage.image}
          textMessage={resultMessage.text}
        />
      }
    </CurrentUserContext.Provider>


  );
}

export default App;
