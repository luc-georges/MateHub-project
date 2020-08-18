import React from 'react';
import logolol from '../../assets/logolol.png';
import './style.scss';

const LastestEvent = () => {
  return (
    <div className="LastestEvent">
      <h2>Lastest event</h2>
      <div className="LastestEvent-module">
        <img
          src={logolol}
          alt="lollogo"
          className="LastestEvent-module-image"
        />
        <a href="/">
          <p>nom du jeux - createur</p>
          <p>date - heures</p>
          <p>nombre de joueurs</p>
        </a>
      </div>
    </div>
  );
};
export default LastestEvent;
