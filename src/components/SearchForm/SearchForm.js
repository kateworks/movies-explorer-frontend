import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import RoundSwitch from '../RoundSwitch/RoundSwitch';
import './SearchForm.css';

function SearchForm(props) {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [searchString]);

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
  };

  const handleStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchString) {
      setErrorMessage('Нужно ввести ключевое слово (название, режиссер, страна или год)');
      return;
    }
    props.onSubmit(searchString, isSwitchOn);
  };

  return (
    <div className="search gradual-change">

      <form name='search-form'
        className='search__form search__box'
        onSubmit={handleSubmit}
      >
        <fieldset className="search__input-box search__box">
          <input
            type="text"
            id="search-input" name="search-input"
            className="search__input search__box"
            placeholder="Фильм"
            value={searchString} onChange={handleStringChange}
          />

          <Button type="submit" userClass="search__button" />
        </fieldset>

        <fieldset className="search__switch-box search__box">
          <div className="search__line search__box" />

          <RoundSwitch isChecked={isSwitchOn} onChange={handleSwitchChange}/>

          <p className="search__switch-name search__box">
            Короткометражки
          </p>
        </fieldset>
      </form>

      <p className="search__input_error search__box">
        {errorMessage}
      </p>
    </div>
  );
}

export default SearchForm;