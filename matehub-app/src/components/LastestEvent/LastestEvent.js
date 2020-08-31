import React from 'react';
import logolol from '../../assets/logolol.png';
import './style.scss';
import Moment from 'react-moment';
import { Pagination } from 'semantic-ui-react';

const LastestEvent = ({ list }) => {
  // console.log(list);
  return (
    <div className="LastestEvent">
      <h2 className="titre">Lastest event</h2>
      <div className="LastestEvent-modules">
        {list.map((element) => {
          return (
            <div className="LastestEvent-module" key={element._event_id}>
              <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
              <a href="/">
                <div className="LatestEvent-text">
                  Game {element.game_name} - Name {element._creator}
                </div>
                <div className="LatestEvent-text">
                  {' '}
                  Date and time  <Moment format="YYYY/MM/DD HH:MM">{element._starting}</Moment>           
                </div>
                <div className="LatestEvent-text">
                  Number of players {element._player_count}
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <Pagination count={10} />
    </div>
  );
};
export default LastestEvent;
