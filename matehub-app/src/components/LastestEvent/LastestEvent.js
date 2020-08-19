import React from 'react';
import logolol from '../../assets/logolol.png';
import './style.scss';

const LastestEvent = ({ list }) => {
  console.log(list);
  return (
    <div className="LastestEvent">
      <h2 className="titre">Lastest event</h2>
      <div className="LastestEvent-modules">
        {list.map((element) => {
          return (
            <div className="LastestEvent-module" key={element.event_id}>
              <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
              <a href="/">
                <div className="LatestEvent-text">
                  Game {element.game_name} - Name {element.creator}
                </div>
                <div className="LatestEvent-text">
                  {' '}
                  Date and time {element.starting}
                </div>
                <div className="LatestEvent-text">
                  Number of players {element.player_count}
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LastestEvent;
