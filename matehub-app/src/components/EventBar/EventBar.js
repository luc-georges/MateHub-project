import React from 'react';
import PropTypes from 'prop-types';

import { Icon, Button } from "semantic-ui-react";

// Erreur findDOMNode à cause de l'utilisation de Button L13

import './style.scss'

const EventBar = ({list}) => {
  console.log(list)
  return (
    <div className="eventbar">
      <Icon className="user circle" size="massive" />
      <button className="eventbar-logoutbutton">Logout</button>
      <div className="eventbar-eventedition">
        Events
        <a href="/"><Icon className="add"/></a>
        <a href="/"><Icon className="search"/></a>
      </div>
      <div className="eventbar-eventlist">
        {list.map((event) => {
          return (
          <div className="eventbar-event" key={event.id}>
            <Icon className="eye" size="large"/>
            <div>
              <p>{event.event_time}</p>
              <p>{event.player_count}</p>
              <p>{event.description}</p>
              <p>{event.duration}</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
)};

EventBar.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      event_time: PropTypes.string,
      player_count: PropTypes.number,
      description: PropTypes.string,
      duration: PropTypes.string,
    })
  )
}

export default EventBar;
