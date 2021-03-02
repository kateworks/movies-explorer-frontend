import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ destination, userClass, children }) => (
  <Link
    to={destination}
    className={`nav-link gradual-change ${userClass || ''}`}
  >
    {children}
  </Link>
);

export default NavLink;