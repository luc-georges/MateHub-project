import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import Moment from 'react-moment';

const EventBar = ({ list, handleLogout }) => {
  // console.log('data dans le component EventBar', list);
  return (
    <div className="eventbar">
      {/* <Icon className="user circle" size="massive" /> */}
      <NavLink exact to="/login">
        <Button content="Login" />
      </NavLink>
      <NavLink exact to="/registration">
        <Button content="registration" />
      </NavLink>
      <Button content="Logout" onClick={handleLogout} />
      <div className="eventbar-eventedition">
        Events
        <NavLink exact to="/createevent">
          <Icon className="add" />
        </NavLink>
        <NavLink exact to="/searchevent">
          <Icon className="search" />
        </NavLink>
      </div>
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
                  <Moment format="YYYY/MM/DD HH:MM">{event._starting}</Moment>{' '}
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
