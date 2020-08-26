import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const TopPlayers = ({ topUsersList }) => {
  console.log(topUsersList);
  return (
    <div className="TopPlayers">
      <h2 className="titre">TopPlayers</h2>
      <div className="TopPlayers-modules">
        {topUsersList.map((element) => (
          <NavLink to={`/profile/${element._name}`} key={element._user_id}>
            <div href="/" className="TopPlayers-module">
              <Icon className="user" size="big" />
              <div>
          <div className="user-text"> pseudo {element._name}</div>
          <div className="user-text"> nbr creat event {element._total_events}</div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TopPlayers;
