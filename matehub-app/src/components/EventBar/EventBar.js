import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import './style.scss';

const EventBar = ({ list }) => {
  console.log('data dans le component EventBar', list);
  return (
    <div className="eventbar">
      <Icon className="user circle" size="massive" />
      <Button content="Logout" />
      <div className="eventbar-eventedition">
        Events
        <a href="/">
          <Icon className="add" />
        </a>
        <a href="/">
          <Icon className="search" />
        </a>
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
                <div>{event._starting}</div>
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
