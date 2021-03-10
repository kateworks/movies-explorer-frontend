import React from 'react';
import Button from '../Button/Button';
import './InfoToolTip.css';

const InfoToolTip = (props) => {
  return (
    <div className="info">
      <div className="info__container">

        <Button
          userClass="info__btn_close"
          title="Закрыть форму"
          onClick={props.onClose}
        />

        <div className="info__message-box">
          <img
            className="info__message-icon"
            src={props.imageLink}
            alt={props.textMessage}
          />
          <p className="info__message-text">
            {props.textMessage}
          </p>
        </div>

      </div>
    </div>
  );
};

export default InfoToolTip;
