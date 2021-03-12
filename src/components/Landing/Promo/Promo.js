import React, { useContext } from 'react';
import Header from '../../Header/Header';
import NavTab from '../NavTab/NavTab';
import Navigation from '../../Navigation/Navigation';

import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import './Promo.css';

function Promo() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="promo promo__block">
      <Header>
        {currentUser.email ? <Navigation theme="blue"/> : <NavTab />}
      </Header>

      <div className="promo__block promo__container">
        <h1 className="promo__block promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <div className="promo__block promo__image" />
      </div>
    </section>
  );
}

export default Promo;