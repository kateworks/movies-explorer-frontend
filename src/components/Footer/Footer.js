import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">

    <p className="footer__title footer__text">
      Учебный проект Яндекс.Практикум х BeatFilm.
    </p>

    <div className="footer__row">
      <p className="footer__copyright footer__text">&#169; 2021</p>
      <nav>
        <ul className="footer__row-links">

          <li className="footer__row-link">
            <a className="footer__link footer__text"
              href="https://praktikum.yandex.ru"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__row-link">
            <a className="footer__link footer__text"
              href="https://github.com"
            >
              Github
            </a>
          </li>

          <li className="footer__row-link">
            <a className="footer__link footer__text"
              href="https://www.facebook.com"
            >
              Facebook
            </a>
          </li>

        </ul>
      </nav>
    </div>
  </footer>
);

export default Footer;
