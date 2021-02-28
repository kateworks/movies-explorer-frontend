import React from 'react';
import './ShortFilmSign.css';

const ShortFilmSign = (props) => (
  <li className="short">
    <div className={
        `short__flag ${props.isShort ? 'short__flag_true' : 'short__flag_false'}`
    }/>
  </li>
);

export default ShortFilmSign;
