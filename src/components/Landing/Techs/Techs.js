import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import SectionTitle from '../SectionTitle/SectionTitle';

import './Techs.css';

const Techs = () => (
  <section className="Techs gradual-change">

    <SectionHeader>Технологии</SectionHeader>

    <div className="techs__container gradual-change">

      <SectionTitle>7 технологий</SectionTitle>

      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.
      </p>

      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>

    </div>

  </section>
);

export default Techs;
