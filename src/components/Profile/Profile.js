import React, { useState } from 'react';
import Button from '../Button/Button';
import './Profile.css';

function Profile(props) {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@mail.ru');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section className="profile">
      <form className="profile__form profile__box gradual-change">
        <h2 className="profile__title profile__box">
          Привет, Виталий!
        </h2>
        <fieldset className="profile__fields profile__box">
          <label for="name"
            className="profile__label profile__text"
          >
            Имя
          </label>
          <input
            type="text"
            id="name" name="name"
            className="profile__item profile__text"
            placeholder="Имя"
            value={name} required
            onChange={handleNameChange}
            disabled={true}
          />

          <label for="email"
            className="profile__label profile__text"
          >
            Почта
          </label>
          <input
            type="email"
            id="email" name="email"
            className="profile__item profile__text"
            placeholder="Почта"
            value={email} required
            onChange={handleEmailChange}
            disabled={true}
          />

        </fieldset>
        <fieldset className="profile__buttons profile__box">
          <Button userClass="profile__btn">
            Редактировать
          </Button>
          <Button
            userClass="profile__btn profile__btn_red"
            onClick={props.onLogout}
          >
            Выйти из аккаунта
          </Button>
        </fieldset>
      </form>
    </section>
  );
}

export default Profile;