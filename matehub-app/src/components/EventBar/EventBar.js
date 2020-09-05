import React from 'react';
import PropTypes from 'prop-types';
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

  const follow_event = [];
  follow_event.push(...personnalData._event_created);
  follow_event.push(...personnalData.has_events);
  const sortedEvents = follow_event.sort(function (a, b) {
    return moment(a.event_time) - moment(b.event_time);
  });

  const d = new Date();
  d.setDate(d.getDate() - 7);

  let filteredData = sortedEvents.filter((date) => {
    return new Date(date.event_time).getTime() >= d.getTime();
  });
  // console.log(filteredData)
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
          {/* {console.log("personnal data Console log",personnalData)} */}
          {filteredData.map((event) => {
            return (
              <div className="eventbar-event-container" key={event.event_id}>
                <div>
                  {event.description.length > 30
                    ? `${event.description.slice(0, 30)}...`
                    : event.description}
                  <NavLink
                    exact
                    to={`/event/${event.event_id}`}
                    id={event.event_id}
                    onClick={handleGetSelectedEvent}
                  >
                    <Icon className="eye" size="large" />
                  </NavLink>
                </div>

                <div className="eventbar-event-infos">
                  {moment(event.event_time).format('YYYY/MM/DD HH:MM')}

                  <div>{event.player_count} players</div>

                  <div>Duration : {event.duration}h</div>
                  {event.lang.map((lang) => {
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
