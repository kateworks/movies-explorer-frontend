import React from 'react';
import './Input.css';

const Input = ({ onChange, errorId, children, ...rest}) => (
  <div className="input input__box">
    <label className="input__label input__box">
      {children}
    </label>

    <input
      className="input__item input__box"
      onChange={onChange}
      {...rest}
    />

    <span className="input__error input__box" id={errorId}>
      Что-то пошло не так...
    </span>
  </div>
);

export default Input;
