import React, { useState } from 'react';
import './RoundCheckBox.css';

const RoundCheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <label className="round-btn">
      <input
        className="round-btn__input"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />

      <span className="round-btn__checkmark"/>
    </label>
  );
}

export default RoundCheckBox;

