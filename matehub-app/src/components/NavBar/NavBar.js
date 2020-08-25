import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavBar = () => {
  // console.log('NavBar');
  return (
    <div className="navbar">
      <div className="navbar-logo">MATE HUB</div>
      <div className="navbar-nav" id="top-menu">
        <NavLink className="navbar-nav-link" exact to="/" >
          <Button
            fluid
            className="home"
            content="home"
            icon="home"
            size="large"
            
          />
        </NavLink>
        <NavLink className="navbar-nav-link" exact to="/">
          <Button
            fluid
            className="home"
            content="Profile"
            icon="user"
            size="large"
          />
        </NavLink>
        <NavLink className="navbar-nav-link" exact to="/">
          <Button
            fluid
            className="home"
            content="Games"
            icon="game"
            size="large"
          />
        </NavLink>
        <NavLink className="navbar-nav-link" exact to="/start">
          <Button
            fluid
            className="home"
            content="Start"
            icon="question"
            size="large"
          />
        </NavLink>
        <NavLink className="navbar-nav-link" exact to="/contact">
          <Button
            fluid
            className="home"
            content="Contact"
            icon="mail"
            size="large"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
