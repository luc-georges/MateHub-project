import React from 'react';
import logolol from '../../assets/logolol.png';
import './style.scss';

const LastestEvent = ({list}) => {
  console.log(list)
  return (
    <div className="LastestEvent">
      <h2 className="titre">Lastest event</h2>
      <div className="LastestEvent-modules">
        {list.map((element) => {
          return (
            <div className="LastestEvent-module" key={element.id}>
              <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
              <a href="/">
                <div className="LatestEvent-text">Game {element.game_id} - Name {element.user_id}
                </div>
                <div className="LatestEvent-text"> Date and time {element.event_time}</div>
                <div className="LatestEvent-text">Number of players {element.player_count}</div>
              </a>
            </div>
          )
        })}
        ;
      </div>
    </div>
  );
};
export default LastestEvent;
