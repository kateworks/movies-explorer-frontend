import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

import personPhoto from '../../../images/my-photo.jpg';
import './AboutMe.css';

const AboutMe = () => (
  <section className="AboutMe gradual-change">

    <SectionHeader>Студент</SectionHeader>

    <article className="person gradual-change">
      <div className="person__info">
        <SectionTitle>Екатерина</SectionTitle>

        <p className="person__subtitle">
          Фронтенд-разработчик
        </p>

        <p className="person__text">
          Я родилась и выросла в Барнауле, закончила АлтГТУ им.И.И.Ползунова
          по специальности "Программное обеспечение вычислительной техники".
          В настоящее время живу в Ленинградской области (д.Пеники). Прошла курс
          Яндекс.Практикума по веб-разработке. Ищу работу front-end разработчика,
          чтобы применить полученные знания, решая нестандартные и серьезные задачи.
        </p>

        <ul className="person__list">
          <li className="person__item">
            <a className="person__link"
              href="https://www.facebook.com"
              target="_blank" rel="noreferrer noopener"
            >
              Facebook
            </a>
          </li>
          <li className="person__item">
            <a className="person__link"
              href="https://github.com/kateworks"
              target="_blank" rel="noreferrer noopener"
            >
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
