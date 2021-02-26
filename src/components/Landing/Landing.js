import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AbouProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Footer from './../Footer/Footer';

import './Landing.css';

const Landing = () => (
  <div className="Landing">
    <Promo/>
    <AboutProject/>
    <Techs/>
    <AboutMe/>
    <Footer/>
  </div>
);

export default Landing;