import React from 'react';
import { Icon } from "semantic-ui-react";

import './style.scss';

const NavBar = () => {
  console.log('NavBar')
  return (
    <div className="navbar">
      <div className="navbar-logo">MATEUB</div>
      <div className="navbar-nav">
        <div className="navbar-nav-link"><a href="/"><Icon className="home" size="large" /> Home</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="user" size="large" />Profile</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="game" size="large" />Games</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="question" size="large" />Tuto / Q&A</a></div>
        <div className="navbar-nav-link"><a href="/"><Icon className="mail" size="large" />Contact</a></div>
      </div>
    </div>
)};

export default NavBar;
