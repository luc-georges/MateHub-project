import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const NavBar = ({ isLogged, connectedUserId, getSelectedUser }) => {
  // console.log('NavBar');

  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
  };


  return (
    <div className="navbar">
      <div className="navbar-logo ">MATE HUB</div>
      <div className="navbar-nav" id="top-menu">
        <NavLink className="navbar-nav-link " exact to="/">
          <Button
            fluid
            className="home"
            content="home"
            icon="home"
            size="large"
            inverted color="teal"
          />
          
        </NavLink>
        {isLogged && (
          <NavLink
            id={connectedUserId}
            className="navbar-nav-link "
            exact
            to={`/personnalprofile/`}
            onClick={handleGetSelectedUser}
          >
            <Button
              fluid
              content="Profile"
              icon="user"
              size="large"
              inverted color="teal"
            />
          </NavLink>
        )}
        <NavLink className="navbar-nav-link " exact to="/">
          <Button
            fluid
            className="home"
            content="Games"
            icon="game"
            size="large"
            inverted color="teal"
          />
        </NavLink>
        <NavLink className="navbar-nav-link " exact to="/gettingstarted">
          <Button
            fluid
            className="home"
            content="Q&A"
            icon="question"
            size="large"
            inverted color="teal"
          />
        </NavLink>
        <NavLink className="navbar-nav-link " exact to="/contact">
          <Button
            fluid
            className="home"
            content="Contact"
            icon="mail"
            size="large"
            inverted color="teal"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
