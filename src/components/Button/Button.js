import React from 'react';
import './Button.css';

const Button = ({ userClass, buttonType, children }) => (
  <button
    className={`button gradual-change ${userClass || ''}`}
    type={buttonType || 'button'}
  >
    { children }
  </button>
);

export default Button;