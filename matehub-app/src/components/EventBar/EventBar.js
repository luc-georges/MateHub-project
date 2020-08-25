import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import './style.scss';
import Moment from 'react-moment';

const EventBar = ({ list, isLogged, handleLogout }) => {
  // console.log('data dans le component EventBar', list);
  return (
    <div className="eventbar">
      {!isLogged && (
        <NavLink exact to="/login">
          <Button content="Login" />
        </NavLink>
      )}

      {!isLogged && (
        <NavLink exact to="/registration">
          <Button content="registration" />
        </NavLink>
      )}

      {!isLogged && <div>Please, connect to see event management</div>}

      {isLogged && <Icon className="user circle" size="massive" />}

      {isLogged && <Button content="Logout" onClick={handleLogout} />}

      {isLogged && (
        <div className="eventbar-eventedition">
          Events
          <NavLink exact to="/createevent">
            <Button circular icon="add" />
          </NavLink>
          <NavLink exact to="/searchevent">
            <Button circular icon="search" />
          </NavLink>
        </div>
      )}

      {isLogged && (
        <div className="eventbar-eventlist">
          {list.map((event) => {
            return (
              <div className="eventbar-event" key={event._event_id}>
                <a href="/">
                  <Icon className="eye" size="big" />
                </a>
                <div className="eventbar-event-infos">
                  <div>Event date :</div>
                  <div>
                    <Moment
                      format="YYYY/MM/DD HH:MM"
                      content={event._starting}
                    />
                  </div>
                  <div>{event._player_count} players</div>
                  <div>Description :</div>
                  <div>
                    {event._description.length > 30
                      ? `${event._description.slice(0, 30)}...`
                      : event._description}
                  </div>
                  <div>Duration : {event._duration.hours}h</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
EventBar.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      event_time: PropTypes.string,
      player_count: PropTypes.number,
      description: PropTypes.string,
      duration: PropTypes.shape({
        hours: PropTypes.number,
      }),
    })
  ),
};
export default EventBar;
