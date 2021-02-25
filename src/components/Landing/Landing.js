import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AbouProject';
import Techs from './Techs/Techs';

import './Landing.css';

const Landing = () => (
  <div className="Landing">
    <Promo/>
    <AboutProject/>
    <Techs/>
  </div>
);

export default Landing;