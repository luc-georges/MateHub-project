import React from 'react';
import './style.scss';
import { Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-matehub.svg';

const NavBar = ({ isLogged, connectedUserId, getSelectedUser }) => {
  // console.log('NavBar');

  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
  };

  return (
    <div className="navbar">
      <div className="header-nav">
        <Image centered size="small" src={logo} />
      </div>
      <div className="navbar-nav" id="top-menu">
        <NavLink className="navbar-nav-link " exact to="/">
          <Button
            fluid
            className="home"
            content="home"
            icon="home"
            size="large"
            inverted
            color="teal"
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
              inverted
              color="teal"
            />
          </NavLink>
        )}
       

        <NavLink className="navbar-nav-link " exact to="/gettingstarted">
          <Button
            fluid
            className="home"
            content="Q&A"
            icon="question"
            size="large"
            inverted
            color="teal"
          />
        </NavLink>
        <NavLink className="navbar-nav-link " exact to="/contact">
          <Button
            fluid
            className="home"
            content="Contact"
            icon="mail"
            size="large"
            inverted
            color="teal"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
