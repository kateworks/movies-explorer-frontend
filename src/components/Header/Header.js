import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = (props) => (

  <header className="Header">
    <Logo/>

    <nav>
      {props.children}
    </nav>
  </header>

);

export default Header;