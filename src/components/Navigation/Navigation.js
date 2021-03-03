import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import PopupMenu from '../PopupMenu/PopupMenu';
import './Navigation.css';

function Navigation() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = () => {
    setIsPopupVisible(true);
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <nav className="menu gradual-change">
      <NavLink to="/movies"
        activeClassName="menu__link_active"
        className="menu__link menu__link_film"
      >
        Фильмы
      </NavLink>

      <NavLink to="/saved-movies"
        activeClassName="menu__link_active"
        className="menu__link menu__link_film"
      >
        Сохранённые фильмы
      </NavLink>

      <NavLink to="/profile"
        activeClassName="menu__link_active"
        className="menu__link menu__link_profile"
      >
        Аккаунт
      </NavLink>

      <Button userClass="menu__button" onClick={handleClick}/>

      {isPopupVisible && <PopupMenu handleClose={handleClose}/>}
    </nav>
  );
}

export default Navigation;