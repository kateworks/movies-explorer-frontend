import React from 'react';
import NavLink from '../../components/NavLink/NavLink';
import './NotFound.css';

const NotFound = () => (
  <section className="not-found gradual-change">
    <h1 className="not-found__title not-found__box gradual-change">
      404
    </h1>

    <p className="not-found__subtitle not-found__box gradual-change">
      Страница не найдена
    </p>

    <NavLink destination="\" userClass="not-found__link">Назад</NavLink>

  </section>
);

export default NotFound;