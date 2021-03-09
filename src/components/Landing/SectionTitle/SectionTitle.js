import React from 'react';

import './SectionTitle.css';

const SectionTitle = (props) => (
  <h3 className="SectionTitle gradual-change">
    {props.children}
  </h3>
);

export default SectionTitle;
