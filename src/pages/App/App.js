import React, { useState } from 'react';
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
  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState({ image: null, text: '' });

  let history = useHistory();

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
        console.log(err);
        imageLink = iconFailure;
        switch (err) {
          case 400:
            messageText = "Ошибка 400, некорректно заполнено одно из полей";
            break;
          default:
            messageText = "Что-то пошло не так! Попробуйте ещё раз.";
        }
          })
      .finally(() => {
        setResultMessage({ image: imageLink, text: messageText });
        console.log(messageText);
        setIsPopupOpen(true);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`App ${isPopupOpen ? 'no-scroll' : ''}`}>
        <Switch>
          <Route path="/signin">
            <Login />
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
