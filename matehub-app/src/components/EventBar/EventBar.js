import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Flag } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import Moment from 'react-moment';

const EventBar = ({ list, isLogged, handleLogout }) => {
  // console.log('data dans le component EventBar', list);
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
                content="Search event"
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
          {list.map((event) => {
            return (
              <div className="eventbar-event-container" key={event._event_id}>
                <div>
                  {event._description.length > 30
                    ? `${event._description.slice(0, 30)}...`
                    : event._description}
                  <a href="/">
                    <NavLink exact to={`/event/${event._id}`}>
                      <Icon className="eye" size="large" />
                    </NavLink>
                  </a>
                </div>

                <div classname="eventbar-event-infos">
                  <Moment format="YYYY/MM/DD HH:MM" content={event._starting} />

                  <div>{event._player_count} players</div>

                  <div>Duration : {event._duration.hours}h</div>
                  {event._langs &&
                    event._langs.map((lang) => {
                      return <Flag name={lang.icon} />;
                    })}
                  {/*  {event._langs.map((lang) => {
                    return <Flag name={lang.icon} />;
                  })} */}
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
