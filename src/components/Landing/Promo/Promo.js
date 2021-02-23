import React from 'react';
import Header from '../../Header/Header';
import './Promo.css';

const Promo = () => (
  <section className="Promo promo__block">
    <Header>
      Здесь будут кнопки
    </Header>

    <div className="promo__block promo__container">
      <h1 className="promo__block promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__block promo__image"/>
    </div>
  </section>
);

export default Promo;