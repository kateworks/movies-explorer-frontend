import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/" className="logo gradual-change"/>
);

export default Logo;