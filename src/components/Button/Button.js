import React from 'react';
import './Button.css';

const Button = ({ userClass, buttonType, onClick, children }) => (
  <button
    className={`button gradual-change ${userClass || ''}`}
    type={buttonType || 'button'}
    onClick={onClick}
  >
    { children || '' }
  </button>
);

export default Button;