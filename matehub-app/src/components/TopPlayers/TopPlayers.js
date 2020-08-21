import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.scss';

const TopPlayers = ({ topUsersList }) => {
  // console.log(topUsersList);
  return (
    <div className="TopPlayers">
      <h2 className="titre">TopPlayers</h2>
      <div className="TopPlayers-modules">
        {topUsersList.map((element) => (
          <a href="/" className="TopPlayers-module" key={element._user_id}>
            <Icon className="user" size="big" />
            <div>
        <div className="user-text"> pseudo {element._name}</div>
        <div className="user-text"> nbr creat event {element._total_events}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopPlayers;
