import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { Icon, Button, Flag } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import uuid from 'react-uuid';
import moment from 'moment';
const EventBar = ({
  personnalData,
  isLogged,
  handleLogout,
  getSelectedEvent,
}) => {
  const handleGetSelectedEvent = (evt) => {
    getSelectedEvent(evt.currentTarget.id);
  };
  let filteredData
  let sortedEvents
  const follow_event = [];
  const d = new Date();
  if(personnalData._event_created){

    follow_event.push(...personnalData._event_created);
  }
  if(personnalData.has_events){
    follow_event.push(...personnalData.has_events);
  }
  if(follow_event.length){
  sortedEvents = follow_event.sort(function (a, b) {
    return moment(a.event_time) - moment(b.event_time);
  });

filteredData = sortedEvents.filter((date) => {
  return new Date(date.event_time).getTime() >= d.getTime();
});
}
  return (
    <div className="eventbar">
      {!isLogged && (
        <NavLink className="regist" exact to="/registration">
          <Button content="registration" inverted color="teal" />
        </NavLink>
      )}

      {!isLogged && <div className="pOr">Or</div>}

      {!isLogged && (
        <NavLink className="login" exact to="/login">
          <Button content="Login" inverted color="teal" />
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
          />{' '}
        </NavLink>
      )}

      {isLogged && <div className="eventbar-eventedition">Events :</div>}
      {isLogged && (
        <div className="eventbar-link-container">
          <div className="eventbar-link-button">
            <NavLink exact to="/createevent">
              <Button
                animated
                fluid
                className="createEvent"
                size="medium"
                inverted
                color="teal"
              >
                <Button.Content visible>Create event</Button.Content>
                <Button.Content hidden>
                  <Icon name="add" />
                </Button.Content>
              </Button>
            </NavLink>
          </div>
          <div className="eventbar-link-button">
            <NavLink exact to="/searchevent">
              <Button
                animated
                fluid
                className="searchEvent"
                size="medium"
                inverted
                color="teal"
              >
                <Button.Content visible>Search event</Button.Content>
                <Button.Content hidden>
                  <Icon name="search" />
                </Button.Content>
              </Button>
            </NavLink>
          </div>
        </div>
      )}
      {isLogged && (
        <div className="eventbar-eventlist">

          {filteredData && filteredData.map((event) => {
            return (
              <div className="eventbar-event-container" key={event._event_id}>
                  <a className="eye-a" href="/">
                    <NavLink exact to={`/event/${event.event_id}`}>
                      <Icon className="eye" size="large" />
                    </NavLink>
                  </a>
                <div>
                  {event.description.length > 30
                    ? `${event.description.slice(0, 30)}...`
                    : event.description}
                </div>

                <div className="eventbar-event-infos">
                  {moment(event.event_time).format('YYYY/MM/DD HH:MM')}

                  <div>{event.player_count} players</div>

                  <div>Duration : {event.duration}h</div>
                  {event.lang && event.lang.map((lang) => {
                    return <Flag name={lang.icon} key={uuid()} />;
                  })}
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
