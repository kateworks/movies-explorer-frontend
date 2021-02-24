import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AbouProject';

import './Landing.css';

const Landing = () => (
  <div className="Landing">
    <Promo/>
    <AboutProject/>
  </div>
);

export default Landing;