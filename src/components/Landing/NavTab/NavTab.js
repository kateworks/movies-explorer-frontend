import React from 'react';
import Button from '../../Button/Button';
import './NavTab.css';

const NavTab = () => (
  <nav className="nav-tab">
    <Button userClass="nav-tab__btn nav-tab__btn_register">
      Регистрация
    </Button>
    <Button userClass="nav-tab__btn nav-tab__btn_login">
      Войти
    </Button>
  </nav>
);

export default NavTab;