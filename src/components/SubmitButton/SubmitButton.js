import React from 'react';
import Button from '../Button/Button';
import './SubmitButton.css';

const SubmitButton = ({ children }) => (
  <Button type="submit" userClass="submit-btn">
    {children}
  </Button>
);

export default SubmitButton;