import React from 'react';
import Button from '../Button/Button';
import RoundSwitch from '../RoundSwitch/RoundSwitch';
import './SearchForm.css';

const SearchForm = (props) => (
  <div className="search gradual-change">
    <form
      name='search-form'
      className='search__form search__box'
      onSubmit={props.onSubmit}
    >
      <fieldset className="search__input-box search__box">
        <input
          type="text"
          id="search-input"
          name="search-input"
          className="search__input search__box"
          placeholder="Фильм"
        />

        <Button userClass="search__button"/>
      </fieldset>

      <fieldset className="search__switch-box search__box">
        <div className="search__line search__box" />

        <RoundSwitch isChecked={true}/>

        <p className="search__switch-name search__box">
          Короткометражки
        </p>
      </fieldset>
    </form>
  </div>
);

export default SearchForm;