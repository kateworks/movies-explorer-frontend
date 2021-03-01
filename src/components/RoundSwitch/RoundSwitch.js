import React, { useState } from 'react';
import './RoundSwitch.css';

const RoundSwitch = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__input"
        checked={isChecked}
        onChange={handleChange}
      />

      <span className="switch__slider"/>
    </label>
  );
}

export default RoundSwitch;
