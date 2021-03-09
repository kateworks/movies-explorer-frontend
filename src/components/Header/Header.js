import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = (props) => (

  <header className="Header">
    <Logo/>
    {props.children}
  </header>

);

export default Header;