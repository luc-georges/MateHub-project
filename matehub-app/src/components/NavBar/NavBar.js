import React from 'react';
import { Icon } from "semantic-ui-react";

import './style.scss';

const NavBar = () => {
  console.log('NavBar')
  return (
    <div className="navbar">
      <div className="navbar-logo">MATEUB</div>
      <div className="navbar-nav" id="top-menu">
        <div className="navbar-nav-link"><a href="/"><Icon className="home navbar-nav-link-icon" size="large" /> Home</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="user navbar-nav-link-icon" size="large" />Profile</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="game navbar-nav-link-icon" size="large" />Games</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="question navbar-nav-link-icon" size="large" />Q&A</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="mail navbar-nav-link-icon" size="large" />Contact</a></div>
      </div>
    </div>
)};

export default NavBar;
