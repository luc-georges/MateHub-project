import React from 'react';
import { Icon, Button } from "semantic-ui-react";

// Erreur findDOMNode à cause de l'utilisation de Button L13

import './style.scss'

const EventBar = () => {
  console.log('EventBar')
  return (
    <div className="eventbar">
      <Icon className="user circle" size="massive" />
      <button className="eventbar-logoutbutton">Logout</button>
      <div className="eventbar-eventedition">
        Events
        <a href="/"><Icon className="add" size=""/></a>
        <a href="/"><Icon className="search" size=""/></a>
      </div>
    </div>
)};

export default EventBar;
