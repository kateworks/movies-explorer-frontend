import React from 'react';
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
        <input type="text"/>

      </fieldset>

      <div className="search__line search__box" />

      <fieldset className="search__switch-box search__box">
        <RoundSwitch isChecked={true}/>
        <p className="search__switch-name search__box">
          Короткометражки
        </p>
      </fieldset>
    </form>
  </div>
);

export default SearchForm;