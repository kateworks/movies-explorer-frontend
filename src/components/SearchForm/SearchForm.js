import React from 'react';
import RoundSwitch from '../RoundSwitch/RoundSwitch';
import './SearchForm.css';

const SearchForm = (props) => (
  <div className="search">
    <form name='search-form'
      className='search__form'
      onSubmit={props.onSubmit}
    >
      <input type="text"/>

      <RoundSwitch isChecked={true}/>
    </form>
  </div>
);

export default SearchForm;