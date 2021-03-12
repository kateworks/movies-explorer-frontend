import React from 'react';
import './RoundSwitch.css';

const RoundSwitch = (props) => (
  <label className="switch gradual-change">
    <input
      type="checkbox"
      className="switch__input"
      checked={props.isChecked}
      onChange={props.onChange}
    />

    <span className="switch__slider"/>
  </label>
);

export default RoundSwitch;
