import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import PopupMenu from '../PopupMenu/PopupMenu';
import './Navigation.css';

function Navigation(props) {
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
        className={`menu__link menu__link_film ${ props.theme ? 'menu__link_film_blue' : ''}`}
      >
        Фильмы
      </NavLink>

      <NavLink to="/saved-movies"
        activeClassName="menu__link_active"
        className={`menu__link menu__link_film ${ props.theme ? 'menu__link_film_blue' : ''}`}
      >
        Сохранённые фильмы
      </NavLink>

      <NavLink to="/profile"
        activeClassName="menu__link_active"
        className={`menu__link menu__link_profile ${ props.theme ? 'menu__link_profile_blue' : ''}`}
      >
        Аккаунт
      </NavLink>

      <Button
        userClass={`menu__button ${ props.theme ? 'menu__button_blue' : ''}`}
        onClick={handleClick}
      />

      {isPopupVisible && <PopupMenu handleClose={handleClose}/>}
    </nav>
  );
}

export default Navigation;