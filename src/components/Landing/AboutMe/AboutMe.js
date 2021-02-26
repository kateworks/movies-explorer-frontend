import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

import personPhoto from '../../../images/person-photo.jpg';
import './AboutMe.css';

const AboutMe = () => (
  <section className="AboutMe gradual-change">

    <SectionHeader>Студент</SectionHeader>

    <article className="person gradual-change">
      <div className="person__info">
        <SectionTitle>Виталий</SectionTitle>

        <p className="person__subtitle">
          Фронтенд-разработчик, 30 лет
        </p>

        <p className="person__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ.
          У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>

        <ul className="person__list">
          <li className="person__item">
            <a className="person__link" href="https://www.facebook.com">
              Facebook
            </a>
          </li>
          <li className="person__item">
            <a className="person__link" href="https://github.com">
              Github
            </a>
          </li>
        </ul>
      </div>

      <img
        className="person__photo"
        src={personPhoto}
        alt="Фотография студента"
      />
    </article>

    <Portfolio />
  </section>
);

export default AboutMe;
