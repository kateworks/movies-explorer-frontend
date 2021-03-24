import React from 'react';

import './Portfolio.css';

const Portfolio = () => (
  <section className="Portfolio portfolio__box gradual-change">
    <h4 className="portfolio__box portfolio__title">Портфолио</h4>

    <ul className="portfolio__box projects__list">
      <li className="portfolio__box projects__item">
        <p className="portfolio__box projects__info">
          Статичный сайт
        </p>
        <a
          className="projects__link"
          href="https://github.com/kateworks/how-to-learn"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__box projects__item">
        <p className="portfolio__box projects__info">
          Адаптивный сайт
        </p>
        <a
          className="projects__link"
          href="https://github.com/kateworks/russian-travel"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>

      <li className="portfolio__box projects__item">
        <p className="portfolio__box projects__info">
          Одностраничное приложение
        </p>
        <a
          className="projects__link"
          href="https://github.com/kateworks/mesto"
          target="_blank" rel="noreferrer noopener"
        >
          ↗
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;

