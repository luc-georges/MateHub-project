import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Icon, Button, Flag } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import uuid from 'react-uuid';
import moment from 'moment';

import { slide as Menu } from 'react-burger-menu';
const EventBar = ({
  personnalData,
  isLogged,
  handleLogout,
  getSelectedEvent,
  getEventById,

}) => {
  const handleGetSelectedEvent = (evt) => {
    getSelectedEvent(evt.currentTarget.id);
    getEventById();
     // eslint-disable-next-line
  };
  
  let filteredData;
  let sortedEvents;
  let acceptedEvents;
  const follow_event = [];
  const d = new Date();
  if (personnalData._event_created) {
    follow_event.push(...personnalData._event_created);
  }
  if (personnalData.has_events) {
    acceptedEvents = personnalData.has_events.filter((event)=>{
      return event.status = 2;
    })
    follow_event.push(...acceptedEvents);
  }
  if (follow_event.length) {
    sortedEvents = follow_event.sort(function (a, b) {
      return moment(a.event_time) - moment(b.event_time);
    });

    filteredData = sortedEvents.filter((date) => {
      return new Date(date.event_time).getTime() >= d.getTime();
    });
  }
  return (
    <Menu>
    <div className="eventbar menu-item" >

      {!isLogged && (
        <NavLink  exact to="/registration">
          <Button content="Registration" inverted color="teal" className="eventbar-auth-button menu-item" />
        </NavLink>
      )}

      {/* {!isLogged && <div className="pOr">Or</div>} */}

      {!isLogged && (
        <NavLink exact to="/login">
          <Button content="Login" inverted color="teal" className="eventbar-auth-button" />
        </NavLink>
      )}

      {!isLogged && (
        <div className="pOr">
          Create an account or login to join the community and keep track of
          your events
        </div>
      )}

      {isLogged && (
        <NavLink exact to="/">
          <Button
            inverted
            color="teal"
            content="Logout"
            onClick={handleLogout}
            className="eventbar-auth-button"
          />{' '}
        </NavLink>
      )}

      {isLogged && <div className="eventbar-eventedition">Events</div>}
      
      {isLogged && (
        <div className="eventbar-eventlist">
          {filteredData &&
            filteredData.map((event) => {
              return (
                <div className="eventbar-event-container" key={event.event_id}>
                    <NavLink
                      id={event.event_id}
                      to={`/event/${event.event_id}`}
                      onClick={handleGetSelectedEvent}
                    >
                      <Icon className="eye icon-eye" size="large" color="teal" style={{marginBottom: "1rem"}}/>
                    </NavLink>
                  <div>
                    {event.description.length > 30
                      ? `${event.description.slice(0, 30)}...`
                      : event.description}
                  </div>

                  <div className="eventbar-event-infos">
                    {moment.parseZone(event.event_time).format('DD/MM/YYYY h:mm a')}

                    <div>{event.player_count} players</div>

                    <div>Duration : {event.duration.slice(0, 2)}h</div>
                    {event.lang &&
                      event.lang.map((lang) => {
                        return <Flag name={lang.icon} key={uuid()} />;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
      </Menu>
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
