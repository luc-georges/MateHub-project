import React from 'react';
import Pagination from '../pagination/pagination';
import { NavLink } from 'react-router-dom';
import logolol from '../../assets/logolol.png';
import './style.scss';
import Moment from 'react-moment';

const LastestEvent = ({ list, getSelectedEvent }) => {
  const handleGetSelectedEvent = (evt, data) => {
    // console.log(evt.currentTarget.id);
    getSelectedEvent(evt.currentTarget.id);
  };

  return (
    <div className="LastestEvent">
      <h2 className="titre">Lastest event</h2>
      <div className="LastestEvent-modules">
        {list.map((element) => {
          return (
            <NavLink
              className="LastestEvent-module"
              key={element._event_id}
              // Laisser le champs id sur l'élément cliquable
              // ca sert au lien de redirect vers la page de l'event
              id={element._event_id}
              to={`/event/${element._event_id}`}
              onClick={handleGetSelectedEvent}
            >
              <img
                src={logolol}
                alt="lollogo"
                className="LastestEvent-module-image"
              />
                <div className="LatestEvent-text">
                  Game {element.game_name} - Name {element._creator}
                </div>
                <div className="LatestEvent-text">
                  {' '}
                  Date and time{' '}
                  <Moment format="YYYY/MM/DD HH:MM">{element._starting}</Moment>
                </div>
                <div className="LatestEvent-text">
                  Number of players {element._player_count}
                </div>
            </NavLink>
          );
        })}
      </div>
      <Pagination
        articlesCount={list.length}
        currentPage={list.currentPage}
        onSetPage={list.onSetPage} />
    </div>
  );
};
export default LastestEvent;
