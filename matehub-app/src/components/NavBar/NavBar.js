import React from 'react';
import './style.scss';
import { Button, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-ok_matehub.svg';

const NavBar = ({ isLogged, connectedUserId, getSelectedUser }) => {


  const handleGetSelectedUser = (evt) => {
    getSelectedUser(evt.currentTarget.id);
  };

  return (
    <div className="navbar">
      <div className="header-nav">
        <Image centered size="small" src={logo} className="navbar-logo"/>
      </div>
      <div className="navbar-nav" id="top-menu">
        <NavLink className="navbar-nav-link " exact to="/">
          <Button
            fluid
            className="navbar-nav-link"
            content="Home"
            icon="home"
            size="tiny"
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
              className="navbar-nav-link"
              content="Profile"
              icon="user"
              size="tiny"
              inverted
              color="teal"
            />
          </NavLink>
          
        )}
        <NavLink className="navbar-nav-link " exact to="/gettingstarted">
          <Button
            fluid
            className="navbar-nav-link"
            content="Q&A"
            icon="question"
            size="tiny"
            inverted
            color="teal"
          />
        </NavLink>
        <NavLink className="navbar-nav-link " exact to="/contact">
          <Button
            fluid
            className="navbar-nav-link"
            content="Contact"
            icon="mail"
            size="tiny"
            inverted
            color="teal"
          />
        </NavLink>
        

        {isLogged && (
          <NavLink className="navbar-nav-link " exact to="/createevent">
          <Button
            fluid
            className="navbar-nav-link"
            content="Event"
            icon="add"
            size="tiny"
            inverted
            color="teal"
          />
        </NavLink>
        
        )}
        {isLogged && (
          <NavLink className="navbar-nav-link " exact to="/searchevent">
          <Button
            fluid
            className="navbar-nav-link"
            content="Search"
            icon="search"
            size="tiny"
            inverted
            color="teal"
          />
        </NavLink>
        
        )}
      </div>
    </div>
  );
};

export default NavBar;
