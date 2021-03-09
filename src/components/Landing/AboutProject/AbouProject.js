import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutProject.css';

const AboutProject = () => (
  <section className="AboutProject gradual-change">

    <SectionHeader>О проекте</SectionHeader>

    <ul className="brief gradual-change">
      <li className="brief__column">
        <h4 className="brief__title">
          Дипломный проект включал 5 этапов
        </h4>
        <p className="brief__text">
          Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.
        </p>
      </li>
      <li className="brief__column">
        <h4 className="brief__title">
          На выполнение диплома ушло 5 недель
        </h4>
        <p className="brief__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
          чтобы успешно защититься.
        </p>
      </li>
    </ul>

    <div className="schedule gradual-change">
      <p className="schedule__text schedule__chart schedule__chart_green">
        1 неделя
      </p>
      <p className="schedule__text schedule__chart schedule__chart_gray">
        4 недели
      </p>
      <p className="schedule__text schedule__item">
        Back-end
      </p>
      <p className="schedule__text schedule__item">
        Front-end
      </p>
    </div>

  </section>
);

export default AboutProject;
